package com.atkseegow.component

import android.app.Activity
import android.util.Base64
import javax.crypto.Cipher
import javax.crypto.SecretKey
import javax.crypto.spec.SecretKeySpec


class AESUtility(private val activity: Activity) {
    @Throws(Exception::class)
    fun encryption(key: String, value: String): String {
        val secretKeySpec: SecretKeySpec = this.getSecretKeySpec(key)
        val cipher: Cipher = Cipher.getInstance("AES")
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec)
        return Base64.encodeToString(cipher.doFinal(value.toByteArray()), Base64.NO_WRAP)
    }

    @Throws(Exception::class)
    fun decryption(key: String, value: String?): String {
        val secretKeySpec: SecretKeySpec = this.getSecretKeySpec(key)
        val cipher: Cipher = Cipher.getInstance("AES")
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec)
        val decryptionValue: ByteArray = cipher.doFinal(Base64.decode(value, Base64.NO_WRAP))
        return String(decryptionValue)
    }

    private fun getSecretKeySpec(key: String): SecretKeySpec {
        val keyEncoded: ByteArray = Base64.decode(key, Base64.DEFAULT)
        val secretKey: SecretKey = SecretKeySpec(keyEncoded, "AES")
        var secretKeyEncoded: ByteArray = secretKey.encoded
        if (secretKeyEncoded.size != 16) {
            val bytes = ByteArray(16)
            for (i in secretKeyEncoded.indices) bytes[i] = secretKeyEncoded[i]
            secretKeyEncoded = bytes
        }
        return SecretKeySpec(secretKeyEncoded, "AES")
    }
}
