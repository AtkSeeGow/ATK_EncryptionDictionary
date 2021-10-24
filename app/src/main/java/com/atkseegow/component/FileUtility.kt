package com.atkseegow.component

import android.Manifest
import android.app.Activity
import android.content.pm.PackageManager
import android.widget.Toast
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import java.io.*


class FileUtility(private val activity: Activity) {
    fun checkPermission() {
        val readPermission = ContextCompat.checkSelfPermission(activity, Manifest.permission.READ_EXTERNAL_STORAGE)
        val writePermission = ContextCompat.checkSelfPermission(activity, Manifest.permission.WRITE_EXTERNAL_STORAGE)
        if (readPermission != PackageManager.PERMISSION_GRANTED || writePermission != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(activity,
                    arrayOf(Manifest.permission.WRITE_EXTERNAL_STORAGE,
                            Manifest.permission.READ_EXTERNAL_STORAGE),
                    1000)
        }
    }

    val externalFilesDir: File?
        get() {
            val result = activity.getExternalFilesDir("");
            return result;
        }

    fun listFiles(filterValue: String?): Array<File> {
        val externalFilesDir = this.externalFilesDir;
        val filterValue = filterValue ?: ""
        var result: Array<File> = (externalFilesDir?.listFiles(object : FilenameFilter {
            override fun accept(dir: File?, name: String): Boolean {
                return name.matches(".*$filterValue.*".toRegex()) && name.toLowerCase().endsWith(".txt")
            }
        }) as Array<File>);
        return result;
    }

    fun readFile(path: String?): String{
        val result = StringBuilder()

        try {
            var line: String?
            val bufferedReader = BufferedReader(FileReader(File(path)))
            while (bufferedReader.readLine().also { line = it } != null)
                result.append(line)
            bufferedReader.close()
        } catch (ioException: IOException) {
            Toast.makeText(activity, ioException.message, Toast.LENGTH_LONG).show()
        }

        return result.toString()
    }

    fun saveFile(name: String, content: String) {
        try {
            val file = File(this.externalFilesDir, "$name.txt");
            val fileWriter = FileWriter(file, false)
            val bufferedWriter = BufferedWriter(fileWriter);
            bufferedWriter.write(content);
            bufferedWriter.newLine();
            bufferedWriter.close();
        } catch (ioException: IOException) {
            Toast.makeText(activity, ioException.message, Toast.LENGTH_LONG).show()
        }
    }
}
