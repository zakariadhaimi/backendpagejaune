print('Start #################################################################');

dbpg = db.getSiblingDB('pdb');


dbpg.jobs.insertMany(
  [{
    "_id": ObjectId("5f332f8ebc20771da8577545"),
    "jobName": "Santé",
    "jobPicture": "santé",
    "specialty": [{
        "_id": ObjectId("5f333317bc20771da8577552"),
        "specialtyName": "Psychologue",
        "specialtyPicture": "psychologue",
        "specialtyProfil": [{
            "_id": ObjectId("5fce4bdb1d46e12a481dc8c0"),
            "idProfil": "5fce4bdb1d46e12a481dc8bf"
        }, ]
    }, {
        "_id": ObjectId("5f333372bc20771da8577556"),
        "specialtyName": "Pédiatre",
        "specialtyPicture": "pédiatre",
        "specialtyProfil": [{
            "_id": ObjectId("5fd8d95d98f77c08a8166ead"),
            "idProfil": "5fd8d95d98f77c08a8166eac"
        }, {
            "_id": ObjectId("5fd8e34498f77c08a8166eb1"),
            "idProfil": "5fd8e34498f77c08a8166eb0"
        }, {
            "_id": ObjectId("5fd8e3ec98f77c08a8166eb5"),
            "idProfil": "5fd8e3ec98f77c08a8166eb4"
        }, {
            "_id": ObjectId("5fd8e4bb98f77c08a8166eb9"),
            "idProfil": "5fd8e4bb98f77c08a8166eb8"
        },  {
            "_id": ObjectId("5fed5a41f864c054d053af25"),
            "idProfil": "5fed5a41f864c054d053af24"
        }, {
            "_id": ObjectId("5fed5a6df864c054d053af27"),
            "idProfil": "5fed5a6df864c054d053af26"
        }, {
            "_id": ObjectId("5fed5a90f864c054d053af29"),
            "idProfil": "5fed5a90f864c054d053af28"
        }, {
            "_id": ObjectId("5fed5abef864c054d053af2b"),
            "idProfil": "5fed5abef864c054d053af2a"
        }, {
            "_id": ObjectId("5fed5aeaf864c054d053af2d"),
            "idProfil": "5fed5aeaf864c054d053af2c"
        }, {
            "_id": ObjectId("5fed5b1df864c054d053af2f"),
            "idProfil": "5fed5b1df864c054d053af2e"
        }, {
            "_id": ObjectId("5fed5b41f864c054d053af31"),
            "idProfil": "5fed5b41f864c054d053af30"
        }, {
            "_id": ObjectId("5fed5b8ff864c054d053af33"),
            "idProfil": "5fed5b8ff864c054d053af32"
        }, {
            "_id": ObjectId("5fed5bbbf864c054d053af35"),
            "idProfil": "5fed5bbbf864c054d053af34"
        }, {
            "_id": ObjectId("5fed5bdbf864c054d053af37"),
            "idProfil": "5fed5bdbf864c054d053af36"
        }, {
            "_id": ObjectId("5fed5c18f864c054d053af39"),
            "idProfil": "5fed5c18f864c054d053af38"
        }, {
            "_id": ObjectId("5fed5c40f864c054d053af3b"),
            "idProfil": "5fed5c40f864c054d053af3a"
        }, {
            "_id": ObjectId("5fed5c63f864c054d053af3d"),
            "idProfil": "5fed5c63f864c054d053af3c"
        }, {
            "_id": ObjectId("5fed5ca5f864c054d053af3f"),
            "idProfil": "5fed5ca5f864c054d053af3e"
        }]
    }, {
        "_id": ObjectId("5f33340fbc20771da8577557"),
        "specialtyName": "Hématologue",
        "specialtyPicture": "hématologue",
        "specialtyProfil": []
    }, {
        "_id": ObjectId("5f3334a8bc20771da8577558"),
        "specialtyName": "Dentiste",
        "specialtyPicture": "dentiste",
        "specialtyProfil": [{
            "_id": ObjectId("5fdab2981e11b30b2c94ba95"),
            "idProfil": "5fdab2981e11b30b2c94ba94"
        }, {
            "_id": ObjectId("5fdab42a1e11b30b2c94ba9d"),
            "idProfil": "5fdab42a1e11b30b2c94ba9c"
        }, {
            "_id": ObjectId("5fdab5451e11b30b2c94baa4"),
            "idProfil": "5fdab5451e11b30b2c94baa3"
        }, {
            "_id": ObjectId("5fdab64b1e11b30b2c94baa9"),
            "idProfil": "5fdab64b1e11b30b2c94baa8"
        }, {
            "_id": ObjectId("5fdab72a1e11b30b2c94baae"),
            "idProfil": "5fdab72a1e11b30b2c94baad"
        }, {
            "_id": ObjectId("5fdab7bf1e11b30b2c94bab3"),
            "idProfil": "5fdab7bf1e11b30b2c94bab2"
        }, {
            "_id": ObjectId("5fdab8621e11b30b2c94bab8"),
            "idProfil": "5fdab8621e11b30b2c94bab7"
        }, {
            "_id": ObjectId("5fdab8c11e11b30b2c94babd"),
            "idProfil": "5fdab8c11e11b30b2c94babc"
        }, {
            "_id": ObjectId("5fdab93f1e11b30b2c94bac2"),
            "idProfil": "5fdab93f1e11b30b2c94bac1"
        }, {
            "_id": ObjectId("5fdaba691e11b30b2c94bac8"),
            "idProfil": "5fdaba691e11b30b2c94bac7"
        }, {
            "_id": ObjectId("5fdabb9b1e11b30b2c94bace"),
            "idProfil": "5fdabb9b1e11b30b2c94bacd"
        }, {
            "_id": ObjectId("5fdabc661e11b30b2c94bad0"),
            "idProfil": "5fdabc661e11b30b2c94bacf"
        }, {
            "_id": ObjectId("5fdabe251e11b30b2c94bada"),
            "idProfil": "5fdabe251e11b30b2c94bad9"
        }, {
            "_id": ObjectId("5fdabea51e11b30b2c94bade"),
            "idProfil": "5fdabea51e11b30b2c94badd"
        }, {
            "_id": ObjectId("5fdabf471e11b30b2c94bae3"),
            "idProfil": "5fdabf471e11b30b2c94bae2"
        }, {
            "_id": ObjectId("5fdc170597664711d4664b5d"),
            "idProfil": "5fdc170597664711d4664b5c"
        }, {
            "_id": ObjectId("5fdc179f97664711d4664b63"),
            "idProfil": "5fdc179f97664711d4664b62"
        }, {
            "_id": ObjectId("5fdc189c97664711d4664b69"),
            "idProfil": "5fdc189c97664711d4664b68"
        }, {
            "_id": ObjectId("5fdc1ed097664711d4664b75"),
            "idProfil": "5fdc1ed097664711d4664b74"
        }, {
            "_id": ObjectId("5fdc1fd597664711d4664b79"),
            "idProfil": "5fdc1fd597664711d4664b78"
        }, {
            "_id": ObjectId("5fdc206597664711d4664b7d"),
            "idProfil": "5fdc206597664711d4664b7c"
        }, {
            "_id": ObjectId("5fdc213697664711d4664b81"),
            "idProfil": "5fdc213697664711d4664b80"
        }, {
            "_id": ObjectId("5fdc21d097664711d4664b85"),
            "idProfil": "5fdc21d097664711d4664b84"
        }, {
            "_id": ObjectId("5fdc222797664711d4664b88"),
            "idProfil": "5fdc222797664711d4664b87"
        }, {
            "_id": ObjectId("5fdc227497664711d4664b8b"),
            "idProfil": "5fdc227397664711d4664b8a"
        }, {
            "_id": ObjectId("5fdc230997664711d4664b8f"),
            "idProfil": "5fdc230997664711d4664b8e"
        }, {
            "_id": ObjectId("5fdc23aa97664711d4664b93"),
            "idProfil": "5fdc23aa97664711d4664b92"
        }, {
            "_id": ObjectId("5fdc243f97664711d4664b98"),
            "idProfil": "5fdc243f97664711d4664b97"
        }, {
            "_id": ObjectId("5fdc24f897664711d4664b9c"),
            "idProfil": "5fdc24f897664711d4664b9b"
        }, {
            "_id": ObjectId("5fdc257697664711d4664b9f"),
            "idProfil": "5fdc257697664711d4664b9e"
        }, {
            "_id": ObjectId("5fdc25c697664711d4664ba2"),
            "idProfil": "5fdc25c697664711d4664ba1"
        }, {
            "_id": ObjectId("5fdc264e97664711d4664ba6"),
            "idProfil": "5fdc264e97664711d4664ba5"
        }, {
            "_id": ObjectId("5fdc26dd97664711d4664baa"),
            "idProfil": "5fdc26dd97664711d4664ba9"
        }, {
            "_id": ObjectId("5fdc279997664711d4664bae"),
            "idProfil": "5fdc279997664711d4664bad"
        }, {
            "_id": ObjectId("5fdc27fb97664711d4664bb1"),
            "idProfil": "5fdc27fb97664711d4664bb0"
        }, {
            "_id": ObjectId("5fdc283a97664711d4664bb4"),
            "idProfil": "5fdc283a97664711d4664bb3"
        }, {
            "_id": ObjectId("5fdc28d197664711d4664bb8"),
            "idProfil": "5fdc28d197664711d4664bb7"
        }, {
            "_id": ObjectId("5fdc296c97664711d4664bbc"),
            "idProfil": "5fdc296c97664711d4664bbb"
        }, {
            "_id": ObjectId("5fdc29e797664711d4664bbf"),
            "idProfil": "5fdc29e797664711d4664bbe"
        }, {
            "_id": ObjectId("5fdc2a6e97664711d4664bc3"),
            "idProfil": "5fdc2a6e97664711d4664bc2"
        }, {
            "_id": ObjectId("5fdc2b1597664711d4664bc7"),
            "idProfil": "5fdc2b1597664711d4664bc6"
        }, {
            "_id": ObjectId("5fdc2bb897664711d4664bcb"),
            "idProfil": "5fdc2bb897664711d4664bca"
        }, {
            "_id": ObjectId("5fdc2c5397664711d4664bcf"),
            "idProfil": "5fdc2c5397664711d4664bce"
        }, {
            "_id": ObjectId("5fdc2ce497664711d4664bd3"),
            "idProfil": "5fdc2ce497664711d4664bd2"
        }, {
            "_id": ObjectId("5fdc2d7897664711d4664bd7"),
            "idProfil": "5fdc2d7897664711d4664bd6"
        }, {
            "_id": ObjectId("5fdc2e0097664711d4664bdb"),
            "idProfil": "5fdc2e0097664711d4664bda"
        }, {
            "_id": ObjectId("5fdc2e9497664711d4664bdf"),
            "idProfil": "5fdc2e9497664711d4664bde"
        }, {
            "_id": ObjectId("5fdcc08397664711d4664be3"),
            "idProfil": "5fdcc08397664711d4664be2"
        }, {
            "_id": ObjectId("5fdcc18497664711d4664be7"),
            "idProfil": "5fdcc18497664711d4664be6"
        }, {
            "_id": ObjectId("5fdcc22897664711d4664beb"),
            "idProfil": "5fdcc22897664711d4664bea"
        }, {
            "_id": ObjectId("5fdcc28297664711d4664bee"),
            "idProfil": "5fdcc28297664711d4664bed"
        }, {
            "_id": ObjectId("5fdcc30797664711d4664bf1"),
            "idProfil": "5fdcc30797664711d4664bf0"
        }, {
            "_id": ObjectId("5fdcc42b97664711d4664bf5"),
            "idProfil": "5fdcc42b97664711d4664bf4"
        }, {
            "_id": ObjectId("5fdcc57597664711d4664bf9"),
            "idProfil": "5fdcc57597664711d4664bf8"
        }, {
            "_id": ObjectId("5fdcc5c697664711d4664bfc"),
            "idProfil": "5fdcc5c697664711d4664bfb"
        }, {
            "_id": ObjectId("5fdccfde97664711d4664c00"),
            "idProfil": "5fdccfde97664711d4664bff"
        }, {
            "_id": ObjectId("5fdcd02597664711d4664c03"),
            "idProfil": "5fdcd02597664711d4664c02"
        }, {
            "_id": ObjectId("5fdcd0b997664711d4664c07"),
            "idProfil": "5fdcd0b997664711d4664c06"
        }, {
            "_id": ObjectId("5fdcd10e97664711d4664c0a"),
            "idProfil": "5fdcd10e97664711d4664c09"
        }, {
            "_id": ObjectId("5fdcd2d497664711d4664c0e"),
            "idProfil": "5fdcd2d497664711d4664c0d"
        }, {
            "_id": ObjectId("5fdcd47c97664711d4664c12"),
            "idProfil": "5fdcd47c97664711d4664c11"
        }, {
            "_id": ObjectId("5fdcd52797664711d4664c16"),
            "idProfil": "5fdcd52797664711d4664c15"
        }, {
            "_id": ObjectId("5fdcd57197664711d4664c19"),
            "idProfil": "5fdcd57197664711d4664c18"
        }, {
            "_id": ObjectId("5fdcd76797664711d4664c1f"),
            "idProfil": "5fdcd76797664711d4664c1e"
        }, {
            "_id": ObjectId("5fdcd85597664711d4664c24"),
            "idProfil": "5fdcd85597664711d4664c23"
        }, {
            "_id": ObjectId("5fdcd96597664711d4664c29"),
            "idProfil": "5fdcd96597664711d4664c28"
        }, {
            "_id": ObjectId("5fdcdb1097664711d4664c2d"),
            "idProfil": "5fdcdb1097664711d4664c2c"
        }, {
            "_id": ObjectId("5fdcdb9f97664711d4664c31"),
            "idProfil": "5fdcdb9f97664711d4664c30"
        }, {
            "_id": ObjectId("5fdcdd4f97664711d4664c35"),
            "idProfil": "5fdcdd4f97664711d4664c34"
        }, {
            "_id": ObjectId("5fdcde2a97664711d4664c39"),
            "idProfil": "5fdcde2a97664711d4664c38"
        }, {
            "_id": ObjectId("5fdcde7097664711d4664c3c"),
            "idProfil": "5fdcde7097664711d4664c3b"
        }, {
            "_id": ObjectId("5fdcdeaa97664711d4664c3e"),
            "idProfil": "5fdcdeaa97664711d4664c3d"
        }, {
            "_id": ObjectId("5fdcdeda97664711d4664c40"),
            "idProfil": "5fdcdeda97664711d4664c3f"
        }, {
            "_id": ObjectId("5fdcdf0697664711d4664c42"),
            "idProfil": "5fdcdf0697664711d4664c41"
        }, {
            "_id": ObjectId("5fdcdf3697664711d4664c44"),
            "idProfil": "5fdcdf3697664711d4664c43"
        }, {
            "_id": ObjectId("5fdcdf7397664711d4664c46"),
            "idProfil": "5fdcdf7397664711d4664c45"
        }, {
            "_id": ObjectId("5fdcdf9d97664711d4664c48"),
            "idProfil": "5fdcdf9d97664711d4664c47"
        }, {
            "_id": ObjectId("5fdcdfcb97664711d4664c4a"),
            "idProfil": "5fdcdfcb97664711d4664c49"
        }, {
            "_id": ObjectId("5fdce00997664711d4664c4c"),
            "idProfil": "5fdce00997664711d4664c4b"
        }, {
            "_id": ObjectId("5fdce03897664711d4664c4e"),
            "idProfil": "5fdce03897664711d4664c4d"
        }, {
            "_id": ObjectId("5fdce06597664711d4664c50"),
            "idProfil": "5fdce06597664711d4664c4f"
        }, {
            "_id": ObjectId("5fdce0db97664711d4664c52"),
            "idProfil": "5fdce0db97664711d4664c51"
        }, {
            "_id": ObjectId("5fdce10997664711d4664c54"),
            "idProfil": "5fdce10997664711d4664c53"
        }, {
            "_id": ObjectId("5fdce13497664711d4664c56"),
            "idProfil": "5fdce13397664711d4664c55"
        }, {
            "_id": ObjectId("5fdce16b97664711d4664c58"),
            "idProfil": "5fdce16b97664711d4664c57"
        }, {
            "_id": ObjectId("5fdce19a97664711d4664c5a"),
            "idProfil": "5fdce19a97664711d4664c59"
        }, {
            "_id": ObjectId("5fdce1c897664711d4664c5c"),
            "idProfil": "5fdce1c897664711d4664c5b"
        }, {
            "_id": ObjectId("5fdce1f097664711d4664c5e"),
            "idProfil": "5fdce1f097664711d4664c5d"
        }, {
            "_id": ObjectId("5fdce21b97664711d4664c60"),
            "idProfil": "5fdce21b97664711d4664c5f"
        }, {
            "_id": ObjectId("5fdce26597664711d4664c62"),
            "idProfil": "5fdce26597664711d4664c61"
        }, {
            "_id": ObjectId("5fdce28e97664711d4664c64"),
            "idProfil": "5fdce28e97664711d4664c63"
        }, {
            "_id": ObjectId("5fdce2bb97664711d4664c66"),
            "idProfil": "5fdce2bb97664711d4664c65"
        }, {
            "_id": ObjectId("5fdce2ee97664711d4664c68"),
            "idProfil": "5fdce2ee97664711d4664c67"
        }, {
            "_id": ObjectId("5fdce31d97664711d4664c6a"),
            "idProfil": "5fdce31d97664711d4664c69"
        }, {
            "_id": ObjectId("5fdce39297664711d4664c6c"),
            "idProfil": "5fdce39297664711d4664c6b"
        }, {
            "_id": ObjectId("5fdce3c097664711d4664c6e"),
            "idProfil": "5fdce3c097664711d4664c6d"
        }, {
            "_id": ObjectId("5fdce3ee97664711d4664c70"),
            "idProfil": "5fdce3ee97664711d4664c6f"
        }, {
            "_id": ObjectId("5fdce41f97664711d4664c72"),
            "idProfil": "5fdce41f97664711d4664c71"
        }, {
            "_id": ObjectId("5fdce44997664711d4664c74"),
            "idProfil": "5fdce44997664711d4664c73"
        }, {
            "_id": ObjectId("5fdce47c97664711d4664c76"),
            "idProfil": "5fdce47c97664711d4664c75"
        }, {
            "_id": ObjectId("5fed2d19f864c054d053adb1"),
            "idProfil": "5fed2d19f864c054d053adb0"
        }, {
            "_id": ObjectId("5fed2d95f864c054d053adb3"),
            "idProfil": "5fed2d95f864c054d053adb2"
        }, {
            "_id": ObjectId("5fed2dcdf864c054d053adb5"),
            "idProfil": "5fed2dcdf864c054d053adb4"
        }, {
            "_id": ObjectId("5fed2df8f864c054d053adb7"),
            "idProfil": "5fed2df8f864c054d053adb6"
        }, {
            "_id": ObjectId("5fed2e23f864c054d053adb9"),
            "idProfil": "5fed2e23f864c054d053adb8"
        }, {
            "_id": ObjectId("5fed2e5bf864c054d053adbb"),
            "idProfil": "5fed2e5bf864c054d053adba"
        }, {
            "_id": ObjectId("5fed2ee3f864c054d053adbd"),
            "idProfil": "5fed2ee3f864c054d053adbc"
        }, {
            "_id": ObjectId("5fed2f0ff864c054d053adbf"),
            "idProfil": "5fed2f0ff864c054d053adbe"
        }, {
            "_id": ObjectId("5fed2f42f864c054d053adc1"),
            "idProfil": "5fed2f42f864c054d053adc0"
        }, {
            "_id": ObjectId("5fed2f6df864c054d053adc3"),
            "idProfil": "5fed2f6df864c054d053adc2"
        }, {
            "_id": ObjectId("5fed2f98f864c054d053adc5"),
            "idProfil": "5fed2f98f864c054d053adc4"
        }, {
            "_id": ObjectId("5fed2fc3f864c054d053adc7"),
            "idProfil": "5fed2fc3f864c054d053adc6"
        }, {
            "_id": ObjectId("5fed2ff1f864c054d053adc9"),
            "idProfil": "5fed2ff1f864c054d053adc8"
        }, {
            "_id": ObjectId("5fed3026f864c054d053adcb"),
            "idProfil": "5fed3026f864c054d053adca"
        }, {
            "_id": ObjectId("5fed3053f864c054d053adcd"),
            "idProfil": "5fed3053f864c054d053adcc"
        }, {
            "_id": ObjectId("5fed30b7f864c054d053adcf"),
            "idProfil": "5fed30b7f864c054d053adce"
        }, {
            "_id": ObjectId("5fed30e1f864c054d053add1"),
            "idProfil": "5fed30e1f864c054d053add0"
        }, {
            "_id": ObjectId("5fed310df864c054d053add3"),
            "idProfil": "5fed310df864c054d053add2"
        }, {
            "_id": ObjectId("5fed314ef864c054d053add5"),
            "idProfil": "5fed314ef864c054d053add4"
        }, {
            "_id": ObjectId("5fed3180f864c054d053add7"),
            "idProfil": "5fed3180f864c054d053add6"
        }, {
            "_id": ObjectId("5fed31c4f864c054d053add9"),
            "idProfil": "5fed31c4f864c054d053add8"
        }, {
            "_id": ObjectId("5fed31faf864c054d053addb"),
            "idProfil": "5fed31faf864c054d053adda"
        }, {
            "_id": ObjectId("5fed3242f864c054d053addd"),
            "idProfil": "5fed3242f864c054d053addc"
        }, {
            "_id": ObjectId("5fed338df864c054d053addf"),
            "idProfil": "5fed338df864c054d053adde"
        }, {
            "_id": ObjectId("5fed33b3f864c054d053ade1"),
            "idProfil": "5fed33b3f864c054d053ade0"
        }, {
            "_id": ObjectId("5fed33d9f864c054d053ade3"),
            "idProfil": "5fed33d9f864c054d053ade2"
        }, {
            "_id": ObjectId("5fed3400f864c054d053ade5"),
            "idProfil": "5fed3400f864c054d053ade4"
        }, {
            "_id": ObjectId("5fed3444f864c054d053ade7"),
            "idProfil": "5fed3444f864c054d053ade6"
        }, {
            "_id": ObjectId("5fed347df864c054d053ade9"),
            "idProfil": "5fed347df864c054d053ade8"
        }, {
            "_id": ObjectId("5fed34ccf864c054d053adeb"),
            "idProfil": "5fed34ccf864c054d053adea"
        }, {
            "_id": ObjectId("5fed34f8f864c054d053aded"),
            "idProfil": "5fed34f8f864c054d053adec"
        }, {
            "_id": ObjectId("5fed3533f864c054d053adef"),
            "idProfil": "5fed3533f864c054d053adee"
        }, {
            "_id": ObjectId("5fed355ef864c054d053adf1"),
            "idProfil": "5fed355ef864c054d053adf0"
        }, {
            "_id": ObjectId("5fed358af864c054d053adf3"),
            "idProfil": "5fed358af864c054d053adf2"
        }, {
            "_id": ObjectId("5fed35baf864c054d053adf5"),
            "idProfil": "5fed35baf864c054d053adf4"
        }, {
            "_id": ObjectId("5fed35eef864c054d053adf7"),
            "idProfil": "5fed35eef864c054d053adf6"
        }, {
            "_id": ObjectId("5fed3612f864c054d053adf9"),
            "idProfil": "5fed3612f864c054d053adf8"
        }, {
            "_id": ObjectId("5fed363ff864c054d053adfb"),
            "idProfil": "5fed363ff864c054d053adfa"
        }, {
            "_id": ObjectId("5fed366df864c054d053adfd"),
            "idProfil": "5fed366df864c054d053adfc"
        }, {
            "_id": ObjectId("5fed369af864c054d053adff"),
            "idProfil": "5fed369af864c054d053adfe"
        }, {
            "_id": ObjectId("5fed37b6f864c054d053ae01"),
            "idProfil": "5fed37b6f864c054d053ae00"
        }]
    }],
    "createdAt": {
        "$date": "2020-08-11T23:53:50.084Z"
    },
    "updatedAt": {
        "$date": "2020-12-31T05:07:49.700Z"
    },
    "__v": 0
}, {
    "_id": ObjectId("5f332fccbc20771da8577546"),
    "jobName": "Droit",
    "jobPicture": "droit",
    "specialty": [],
    "createdAt": {
        "$date": "2020-08-11T23:54:52.637Z"
    },
    "updatedAt": {
        "$date": "2020-08-11T23:54:52.637Z"
    },
    "__v": 0
}, {
    "_id": ObjectId("5f332fe3bc20771da8577547"),
    "jobName": "Coiffure",
    "jobPicture": "coiffure",
    "specialty": [],
    "createdAt": {
        "$date": "2020-08-11T23:55:15.944Z"
    },
    "updatedAt": {
        "$date": "2020-08-11T23:55:15.944Z"
    },
    "__v": 0
}, {
    "_id": ObjectId("5f33309cbc20771da8577548"),
    "jobName": "Electricien",
    "jobPicture": "electricien",
    "specialty": [],
    "createdAt": {
        "$date": "2020-08-11T23:58:20.044Z"
    },
    "updatedAt": {
        "$date": "2020-08-11T23:58:20.044Z"
    },
    "__v": 0
}, {
    "_id": ObjectId("5f3330babc20771da8577549"),
    "jobName": "Architecte",
    "jobPicture": "architecte",
    "specialty": [],
    "createdAt": {
        "$date": "2020-08-11T23:58:50.130Z"
    },
    "updatedAt": {
        "$date": "2020-08-11T23:58:50.130Z"
    },
    "__v": 0
}, {
    "_id": ObjectId("5f3330cabc20771da857754a"),
    "jobName": "Boucher",
    "jobPicture": "boucher",
    "specialty": [],
    "createdAt": {
        "$date": "2020-08-11T23:59:06.046Z"
    },
    "updatedAt": {
        "$date": "2020-08-11T23:59:06.046Z"
    },
    "__v": 0
}, {
    "_id": ObjectId("5f3330f8bc20771da857754b"),
    "jobName": "Carleur",
    "jobPicture": "carleur",
    "specialty": [],
    "createdAt": {
        "$date": "2020-08-11T23:59:52.904Z"
    },
    "updatedAt": {
        "$date": "2020-08-11T23:59:52.904Z"
    },
    "__v": 0
}, {
    "_id": ObjectId("5f333117bc20771da857754c"),
    "jobName": "Cordonnier",
    "jobPicture": "cordonnier",
    "specialty": [],
    "createdAt": {
        "$date": "2020-08-12T00:00:23.637Z"
    },
    "updatedAt": {
        "$date": "2020-08-12T00:00:23.637Z"
    },
    "__v": 0
}, {
    "_id": ObjectId("5f333162bc20771da857754d"),
    "jobName": "Menuisier",
    "jobPicture": "menuisier",
    "specialty": [],
    "createdAt": {
        "$date": "2020-08-12T00:01:38.336Z"
    },
    "updatedAt": {
        "$date": "2020-08-12T00:01:38.336Z"
    },
    "__v": 0
}]

);

print('END #################################################################');