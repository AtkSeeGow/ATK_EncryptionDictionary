package com.atkseegow.encryptiondictionary

import android.content.Intent
import android.os.Bundle
import android.util.DisplayMetrics
import android.util.TypedValue
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.constraintlayout.widget.ConstraintSet
import androidx.core.content.ContextCompat
import com.atkseegow.component.FILE_KEY
import com.atkseegow.component.FileUtility
import com.google.android.material.floatingactionbutton.FloatingActionButton
import kotlin.math.roundToInt


class ListActivity : AppCompatActivity() {
    private val fileUtility:FileUtility = FileUtility(this);

    private lateinit var addButton: Button;
    private lateinit var filterButton: Button;
    private lateinit var filterEditText: EditText;
    private lateinit var primaryLayout: ConstraintLayout;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.list_main);

        fileUtility.checkPermission();

        addButton = findViewById<Button>(R.id.addButton)
        filterButton = findViewById<Button>(R.id.filterButton)
        filterEditText = findViewById<EditText>(R.id.filterEditText)
        primaryLayout = findViewById<ConstraintLayout>(R.id.primaryConstraintLayout);

        this.load();

        filterButton.setOnClickListener(View.OnClickListener {
            this.load();
        })

        addButton.setOnClickListener(View.OnClickListener { view ->
            val intent = Intent()
            intent.setClass(view.context, InfoActivity::class.java)
            view.context.startActivity(intent)
        })
    }

    private fun load() {
        var filterValue = filterEditText.text.toString();

        primaryLayout.removeAllViewsInLayout();

        var files = fileUtility.listFiles(filterValue);

        var primarySet = ConstraintSet();
        primarySet.clone(primaryLayout);

        var previousLayout = ConstraintLayout(primaryLayout.context)
        for (file in files) {
            val secondaryLayout = ConstraintLayout(primaryLayout.context)
            secondaryLayout.id = View.generateViewId()
            secondaryLayout.background = ContextCompat.getDrawable(primaryLayout.context, R.drawable.shape_rectangle)
            primaryLayout.addView(secondaryLayout)

            val titleText = TextView(primaryLayout.context)
            titleText.text = file.nameWithoutExtension
            titleText.id = View.generateViewId()
            titleText.setTextSize(TypedValue.COMPLEX_UNIT_SP, 20f)
            secondaryLayout.addView(titleText)

            val editButton = FloatingActionButton(primaryLayout.context)
            editButton.id = View.generateViewId()
            editButton.setImageResource(R.drawable.ic_assignment)
            editButton.setOnClickListener { view ->
                val intent = Intent()
                intent.putExtra(FILE_KEY, file.toString())
                intent.setClass(view.context, InfoActivity::class.java)
                view.context.startActivity(intent)
            }
            secondaryLayout.addView(editButton)

            val deleteButton = FloatingActionButton(primaryLayout.context)
            deleteButton.id = View.generateViewId()
            deleteButton.setImageResource(R.drawable.ic_delete)
            deleteButton.setOnClickListener {
                file.delete();
                this.load();
            }
            secondaryLayout.addView(deleteButton)

            val secondarySet = ConstraintSet()
            secondarySet.clone(secondaryLayout)
            secondarySet.connect(titleText.id, ConstraintSet.TOP, ConstraintSet.PARENT_ID, ConstraintSet.TOP, this.getMargin())
            secondarySet.constrainHeight(titleText.id, ConstraintSet.WRAP_CONTENT)
            secondarySet.constrainWidth(titleText.id, ConstraintLayout.LayoutParams.MATCH_PARENT)
            secondarySet.connect(deleteButton.id, ConstraintSet.TOP, ConstraintSet.PARENT_ID, ConstraintSet.TOP, this.getMargin())
            secondarySet.connect(deleteButton.id, ConstraintSet.RIGHT, ConstraintSet.PARENT_ID, ConstraintSet.RIGHT, this.getMargin())
            secondarySet.connect(editButton.id, ConstraintSet.TOP, ConstraintSet.PARENT_ID, ConstraintSet.TOP, this.getMargin())
            secondarySet.connect(editButton.id, ConstraintSet.RIGHT, deleteButton.id, ConstraintSet.LEFT, this.getMargin())
            secondarySet.applyTo(secondaryLayout)

            primarySet.connect(secondaryLayout.id, ConstraintSet.TOP, previousLayout.id, ConstraintSet.BOTTOM, this.getMargin())
            primarySet.constrainWidth(secondaryLayout.id, ConstraintLayout.LayoutParams.MATCH_PARENT)
            primarySet.constrainHeight(secondaryLayout.id, ConstraintSet.WRAP_CONTENT)

            previousLayout = secondaryLayout;
        }

        primarySet.applyTo(primaryLayout)
    }

    override fun onResume(){
        super.onResume()
        this.load();
    }

    private fun getMargin(): Int {
        var constraintLayout = findViewById<ConstraintLayout>(R.id.primaryConstraintLayout);
        var context = constraintLayout.context;
        val displayMetrics: DisplayMetrics = context.resources.displayMetrics
        return (8 * (displayMetrics.xdpi / DisplayMetrics.DENSITY_DEFAULT)).roundToInt()
    }
}