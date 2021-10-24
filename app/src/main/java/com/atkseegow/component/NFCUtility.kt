package com.atkseegow.component

import android.app.Activity
import android.content.Intent
import android.nfc.NfcAdapter
import android.nfc.Tag
import android.widget.EditText


class NFCUtility(private val activity: Activity) {
    var encodeUtility = EncodeUtility(activity);
    var isPopupView = false;

    fun reader(intent: Intent?, editText: EditText) {
        if (this.isPopupView && intent!!.hasExtra(NfcAdapter.EXTRA_TAG)) {
            val tag = intent!!.getParcelableExtra<Tag>(NfcAdapter.EXTRA_TAG)

            val stringBuilder = StringBuilder()
            val id: ByteArray = tag!!.id
            stringBuilder.append(encodeUtility.getHexString(id))

            var tagId = stringBuilder.toString()

            editText.setText(tagId)
        }
    }
}
