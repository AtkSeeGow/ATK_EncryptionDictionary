package com.atkseegow.encryptiondictionary

import android.annotation.SuppressLint
import android.app.PendingIntent
import android.content.Intent
import android.content.IntentFilter
import android.nfc.NfcAdapter
import android.nfc.tech.MifareUltralight
import android.nfc.tech.NfcA
import android.os.Bundle
import android.util.DisplayMetrics
import android.util.TypedValue
import android.view.LayoutInflater
import android.view.View
import android.view.View.OnTouchListener
import android.view.ViewGroup
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.constraintlayout.widget.ConstraintSet
import androidx.core.content.ContextCompat
import com.atkseegow.component.*
import com.atkseegow.domain.*
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.gson.Gson
import kotlin.math.roundToInt


class InfoActivity : AppCompatActivity() {
    private val fileUtility: FileUtility = FileUtility(this);
    private val nfcUtility: NFCUtility = NFCUtility(this);
    private val aesUtility: AESUtility = AESUtility(this);

    private lateinit var titleEditText: EditText;
    private lateinit var saveButton: Button;
    private lateinit var addButton: Button;
    private lateinit var primaryLayout: ConstraintLayout;

    private lateinit var nfcAdapter: NfcAdapter;
    private lateinit var pendingIntent: PendingIntent;
    private lateinit var intentFiltersArray: Array<IntentFilter>;
    private lateinit var techList: Array<Array<String>>;

    private lateinit var tagIdEditText: EditText;

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.info_main);

        this.titleEditText = findViewById<EditText>(R.id.titleEditText);
        this.saveButton = findViewById<Button>(R.id.saveButton)
        this.addButton = findViewById<Button>(R.id.addButton)
        this.primaryLayout = findViewById<ConstraintLayout>(R.id.primaryConstraintLayout);

        nfcAdapter = NfcAdapter.getDefaultAdapter(this);
        if (nfcAdapter == null) {
            Toast.makeText(this, "This device doesn't support NFC.", Toast.LENGTH_LONG).show();
        }

        val intent = intent
        val filePath = intent.getStringExtra(FILE_KEY)
        if (filePath != null && filePath.trim { it <= ' ' }.isNotEmpty()) {
            val json: String = fileUtility.readFile(filePath)
            val content: Content = Gson().fromJson(json, Content::class.java)
            findViewById<EditText>(R.id.titleEditText).setText(content.Title)

            var previousView = findViewById<View>(R.id.titleEditText)
            for (nameValuePair in content.NameValuePairs)
                previousView =
                    this.addSecondaryLayout(nameValuePair.Name, nameValuePair.Value, previousView)
        }

        saveButton.setOnClickListener(View.OnClickListener { view ->
            var content = Content();
            content.Title = titleEditText.text.toString();

            if (content.Title.isNullOrEmpty()) {
                Toast.makeText(this, "Title is null or empty", Toast.LENGTH_LONG).show();
                return@OnClickListener;
            }

            var secondaryView = this.getTopSecondaryLayout(this.titleEditText.id);
            while (secondaryView != null) {
                var secondaryLayout = secondaryView as ConstraintLayout;
                val nameEditText = secondaryLayout.getChildAt(1) as EditText
                val valueEditText = secondaryLayout.getChildAt(3) as EditText
                val nameValuePair = NameValuePair()
                nameValuePair.Name = nameEditText.text.toString()
                nameValuePair.Value = valueEditText.text.toString()
                content.NameValuePairs.add(nameValuePair);
                secondaryView = this.getTopSecondaryLayout(secondaryView.id)
            }

            fileUtility.saveFile(content.Title, Gson().toJson(content));
            Toast.makeText(this, "Save complete", Toast.LENGTH_LONG).show()
        })

        addButton.setOnClickListener(View.OnClickListener { view ->
            var previousView = this.getLastSecondaryLayout();
            this.addSecondaryLayout("", "", previousView as View);
        })
    }

    override fun onResume() {
        super.onResume()
        if (nfcAdapter != null) {
            if (nfcAdapter.isEnabled) {
                pendingIntent = PendingIntent.getActivity(
                    this,
                    0,
                    Intent(this, javaClass).addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP),
                    0
                )
                val intentFilter = IntentFilter(NfcAdapter.ACTION_TAG_DISCOVERED)
                intentFiltersArray = arrayOf(intentFilter)
                techList = arrayOf(
                    arrayOf(
                        NfcA::class.java.name,
                        MifareUltralight::class.java.name
                    )
                )
                nfcAdapter.enableForegroundDispatch(
                    this,
                    pendingIntent,
                    intentFiltersArray,
                    techList
                )
            } else {
                Toast.makeText(this, "NFC Disabled", Toast.LENGTH_SHORT).show()
            }
        }
    }

    override fun onNewIntent(intent: Intent?) {
        nfcUtility.reader(intent, tagIdEditText)
    }

    private fun addSecondaryLayout(
        name: String?,
        value: String?,
        previousView: View
    ): ConstraintLayout {
        val secondaryLayout = ConstraintLayout(primaryLayout.context)
        secondaryLayout.id = View.generateViewId()
        secondaryLayout.background =
            ContextCompat.getDrawable(primaryLayout.context, R.drawable.shape_rectangle)
        primaryLayout.addView(secondaryLayout)

        val nameTextView = TextView(primaryLayout.context)
        nameTextView.text = "Name"
        nameTextView.id = View.generateViewId()
        nameTextView.setTextSize(TypedValue.COMPLEX_UNIT_SP, 20f)
        secondaryLayout.addView(nameTextView)

        val nameEditText = EditText(primaryLayout.context)
        nameEditText.id = View.generateViewId()
        if (name != null && !name.trim { it <= ' ' }.isEmpty()) nameEditText.setText(name)
        secondaryLayout.addView(nameEditText)

        val valueTextView = TextView(primaryLayout.context)
        valueTextView.text = "Value"
        valueTextView.id = View.generateViewId()
        valueTextView.setTextSize(TypedValue.COMPLEX_UNIT_SP, 20f)
        secondaryLayout.addView(valueTextView)

        val valueEditText = EditText(primaryLayout.context)
        valueEditText.id = View.generateViewId()
        if (value != null && !value.trim { it <= ' ' }.isEmpty()) valueEditText.setText(value)
        secondaryLayout.addView(valueEditText)

        val deleteButton = FloatingActionButton(primaryLayout.context)
        deleteButton.id = View.generateViewId()
        deleteButton.setImageResource(R.drawable.ic_delete)
        deleteButton.setOnClickListener { view -> this.deleteSecondaryLayout(view) }
        secondaryLayout.addView(deleteButton)

        val encryptionButton = FloatingActionButton(primaryLayout.context)
        encryptionButton.id = View.generateViewId()
        encryptionButton.setImageResource(R.drawable.ic_nfc)
        encryptionButton.setOnClickListener { view -> this.popupScanTagLayout(view) }
        secondaryLayout.addView(encryptionButton)

        val secondarySet = ConstraintSet()
        secondarySet.clone(secondaryLayout)
        secondarySet.connect(
            nameTextView.id,
            ConstraintSet.TOP,
            ConstraintSet.PARENT_ID,
            ConstraintSet.TOP,
            getMargin()
        )
        secondarySet.constrainHeight(nameTextView.id, ConstraintSet.WRAP_CONTENT)
        secondarySet.constrainWidth(nameTextView.id, ConstraintLayout.LayoutParams.MATCH_PARENT)
        secondarySet.connect(
            deleteButton.id,
            ConstraintSet.TOP,
            ConstraintSet.PARENT_ID,
            ConstraintSet.TOP,
            getMargin()
        )
        secondarySet.connect(
            deleteButton.id,
            ConstraintSet.RIGHT,
            ConstraintSet.PARENT_ID,
            ConstraintSet.RIGHT,
            getMargin()
        )
        secondarySet.connect(
            encryptionButton.id,
            ConstraintSet.TOP,
            ConstraintSet.PARENT_ID,
            ConstraintSet.TOP,
            getMargin()
        )
        secondarySet.connect(
            encryptionButton.id,
            ConstraintSet.RIGHT,
            deleteButton.id,
            ConstraintSet.LEFT,
            getMargin()
        )
        secondarySet.connect(
            nameEditText.id,
            ConstraintSet.TOP,
            nameTextView.id,
            ConstraintSet.BOTTOM,
            getMargin()
        )
        secondarySet.constrainHeight(nameEditText.id, ConstraintSet.WRAP_CONTENT)
        secondarySet.constrainWidth(nameEditText.id, ConstraintLayout.LayoutParams.MATCH_PARENT)
        secondarySet.connect(
            valueTextView.id,
            ConstraintSet.TOP,
            nameEditText.id,
            ConstraintSet.BOTTOM,
            getMargin()
        )
        secondarySet.constrainHeight(valueTextView.id, ConstraintSet.WRAP_CONTENT)
        secondarySet.constrainWidth(valueTextView.id, ConstraintLayout.LayoutParams.MATCH_PARENT)
        secondarySet.connect(
            valueEditText.id,
            ConstraintSet.TOP,
            valueTextView.id,
            ConstraintSet.BOTTOM,
            getMargin()
        )
        secondarySet.constrainHeight(valueEditText.id, ConstraintSet.WRAP_CONTENT)
        secondarySet.constrainWidth(valueEditText.id, ConstraintLayout.LayoutParams.MATCH_PARENT)
        secondarySet.applyTo(secondaryLayout)

        val primarySet = ConstraintSet()
        primarySet.clone(primaryLayout)

        primarySet.connect(
            secondaryLayout.id,
            ConstraintSet.TOP,
            previousView.id,
            ConstraintSet.BOTTOM,
            getMargin()
        )
        primarySet.constrainHeight(secondaryLayout.id, ConstraintSet.WRAP_CONTENT)
        primarySet.constrainWidth(secondaryLayout.id, ConstraintLayout.LayoutParams.MATCH_PARENT)
        primarySet.setMargin(secondaryLayout.id, ConstraintSet.START, getMargin())
        primarySet.setMargin(secondaryLayout.id, ConstraintSet.END, getMargin())
        primarySet.applyTo(primaryLayout)

        return secondaryLayout;
    }

    private fun deleteSecondaryLayout(view: View) {
        val secondaryLayout = view.parent as ViewGroup as ConstraintLayout
        val topView: View? = this.getTopSecondaryLayout(secondaryLayout.id)

        if (topView != null) {
            val primarySet = ConstraintSet()
            primarySet.clone(primaryLayout)
            val layoutParams = secondaryLayout.layoutParams as ConstraintLayout.LayoutParams
            primarySet.connect(
                topView.id,
                ConstraintSet.TOP,
                layoutParams.topToBottom,
                ConstraintSet.BOTTOM,
                layoutParams.topMargin
            )
            primarySet.applyTo(primaryLayout)
        }
        primaryLayout.removeView(secondaryLayout)
    }

    private fun getLastSecondaryLayout(): View? {
        var result: View? = null
        for (i in 0 until primaryLayout.childCount) {
            val view = primaryLayout.getChildAt(i)
            result = view
        }
        return result
    }

    private fun getTopSecondaryLayout(viewId: Int): View? {
        var result: View? = null
        for (i in 0 until primaryLayout.childCount) {
            val view = primaryLayout.getChildAt(i)
            val layoutParams = view.layoutParams as ConstraintLayout.LayoutParams
            if (layoutParams.topToBottom == viewId)
                result = view
        }
        return result
    }

    @SuppressLint("ClickableViewAccessibility")
    private fun popupScanTagLayout(view: View) {
        nfcUtility.isPopupView = true;

        var secondaryLayout = view.parent as ConstraintLayout;
        var scanTagLayout =
            LayoutInflater.from(view.context).inflate(R.layout.nfc_main, null, false)

        this.tagIdEditText = scanTagLayout.findViewById<EditText>(R.id.tagIdEditText)
        val encryptionButton = scanTagLayout.findViewById<Button>(R.id.encryptionButton)
        val decryptionButton = scanTagLayout.findViewById<Button>(R.id.decryptionButton)

        val valueEditText = secondaryLayout.getChildAt(3) as EditText

        val popWindow = PopupWindow(
            scanTagLayout,
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.WRAP_CONTENT,
            true
        )
        popWindow.isTouchable = true
        popWindow.setTouchInterceptor(OnTouchListener { _, _ ->
            nfcUtility.isPopupView = false
            false
        })

        val drawable = ContextCompat.getDrawable(view.context, R.drawable.shape_rectangle)
        popWindow.setBackgroundDrawable(drawable)
        popWindow.showAsDropDown(view, 0, 0)


        encryptionButton.setOnClickListener { view ->
            nfcUtility.isPopupView = false
            try {
                valueEditText.setText(
                    this.aesUtility.encryption(
                        tagIdEditText.text.toString(),
                        valueEditText.text.toString()
                    )
                )
            } catch (exception: Exception) {
                Toast.makeText(view.context, exception.message, Toast.LENGTH_LONG).show()
            }
            popWindow.dismiss()
        }

        decryptionButton.setOnClickListener { view ->
            nfcUtility.isPopupView = false
            try {
                valueEditText.setText(
                    this.aesUtility.decryption(
                        tagIdEditText.text.toString(),
                        valueEditText.text.toString()
                    )
                )
            } catch (exception: Exception) {
                Toast.makeText(view.context, exception.message, Toast.LENGTH_LONG).show()
            }
            popWindow.dismiss()
        }
    }

    private fun getMargin(): Int {
        var constraintLayout = findViewById<ConstraintLayout>(R.id.primaryConstraintLayout);
        var context = constraintLayout.context;
        val displayMetrics: DisplayMetrics = context.resources.displayMetrics
        return (8 * (displayMetrics.xdpi / DisplayMetrics.DENSITY_DEFAULT)).roundToInt()
    }
}