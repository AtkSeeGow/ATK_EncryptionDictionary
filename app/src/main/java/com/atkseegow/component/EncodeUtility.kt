package com.atkseegow.component

import android.app.Activity

class EncodeUtility(private val activity: Activity) {
    fun getHexString(bytes: ByteArray): String? {
        val stringBuilder = StringBuilder()
        for (i in bytes.indices) {
            val b = bytes[i].toInt() and 0xFF
            if (b < 0x10) stringBuilder.append('0')
            stringBuilder.append(Integer.toHexString(b.toInt()))
        }
        return stringBuilder.toString()
    }

    fun getHexByte(value: String): ByteArray? {
        var m = 0
        var n = 0
        val l = value.length / 2
        println(l)
        val ret = ByteArray(l)
        for (i in 0 until l) {
            m = i * 2 + 1
            n = m + 1
            ret[i] = java.lang.Byte.decode("0x" + value.substring(i * 2, m) + value.substring(m, n))
        }
        return ret
    }
}
