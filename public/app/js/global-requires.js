const $ = jQuery = require("jquery")
const localforage = require("localforage")
const path = require("path")
const fs = require("fs")
const Jimp = require("jimp")
const remote = require("electron").remote
const nodeCrypto = require("crypto")
const twttr = { txt: require("twitter-text") }
const tippy = require("tippy.js")
const request = require("request")
const j2x = require("js2xmlparser")
const i18n = require("../../lib/i18n.js")
const moment = require("moment")

var MPRISPlayer;
try {
  MPRISPlayer = require("mpris-service")
} catch (e) {
  MPRISPlayer = null
}
