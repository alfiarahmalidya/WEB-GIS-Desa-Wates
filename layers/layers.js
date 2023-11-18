var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriTopoWorld_3 = new ol.layer.Tile({
            'title': 'Esri Topo World',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Wates_4 = new ol.format.GeoJSON();
var features_Wates_4 = format_Wates_4.readFeatures(json_Wates_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wates_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wates_4.addFeatures(features_Wates_4);
var lyr_Wates_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wates_4, 
                style: style_Wates_4,
                interactive: true,
                title: '<img src="styles/legend/Wates_4.png" /> Wates'
            });
var format_sungai_5 = new ol.format.GeoJSON();
var features_sungai_5 = format_sungai_5.readFeatures(json_sungai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_5.addFeatures(features_sungai_5);
var lyr_sungai_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_5, 
                style: style_sungai_5,
                interactive: true,
                title: '<img src="styles/legend/sungai_5.png" /> sungai'
            });
var format_pemukimian_rev_6 = new ol.format.GeoJSON();
var features_pemukimian_rev_6 = format_pemukimian_rev_6.readFeatures(json_pemukimian_rev_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukimian_rev_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukimian_rev_6.addFeatures(features_pemukimian_rev_6);
var lyr_pemukimian_rev_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukimian_rev_6, 
                style: style_pemukimian_rev_6,
                interactive: true,
                title: '<img src="styles/legend/pemukimian_rev_6.png" /> pemukimian_rev'
            });
var format_Jalan_rev_7 = new ol.format.GeoJSON();
var features_Jalan_rev_7 = format_Jalan_rev_7.readFeatures(json_Jalan_rev_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_rev_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_rev_7.addFeatures(features_Jalan_rev_7);
var lyr_Jalan_rev_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_rev_7, 
                style: style_Jalan_rev_7,
                interactive: true,
    title: 'Jalan_rev<br />\
    <img src="styles/legend/Jalan_rev_7_0.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_rev_7_1.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_rev_7_2.png" /> Jalan Setapak<br />'
        });
var format_PEMERINTAHAN_PT_25K_8 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_8 = format_PEMERINTAHAN_PT_25K_8.readFeatures(json_PEMERINTAHAN_PT_25K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_8.addFeatures(features_PEMERINTAHAN_PT_25K_8);
var lyr_PEMERINTAHAN_PT_25K_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_25K_8, 
                style: style_PEMERINTAHAN_PT_25K_8,
                interactive: true,
    title: 'PEMERINTAHAN_PT_25K<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_8_0.png" /> Kantor Kepala Desa<br />'
        });
var format_PENDIDIKAN_PT_25K_9 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_25K_9 = format_PENDIDIKAN_PT_25K_9.readFeatures(json_PENDIDIKAN_PT_25K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_25K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_25K_9.addFeatures(features_PENDIDIKAN_PT_25K_9);
var lyr_PENDIDIKAN_PT_25K_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENDIDIKAN_PT_25K_9, 
                style: style_PENDIDIKAN_PT_25K_9,
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_25K_9.png" /> PENDIDIKAN_PT_25K'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(false);lyr_EsriTopoWorld_3.setVisible(true);lyr_Wates_4.setVisible(true);lyr_sungai_5.setVisible(true);lyr_pemukimian_rev_6.setVisible(true);lyr_Jalan_rev_7.setVisible(true);lyr_PEMERINTAHAN_PT_25K_8.setVisible(true);lyr_PENDIDIKAN_PT_25K_9.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OpenStreetMap_1,lyr_GoogleSatellite_2,lyr_EsriTopoWorld_3,lyr_Wates_4,lyr_sungai_5,lyr_pemukimian_rev_6,lyr_Jalan_rev_7,lyr_PEMERINTAHAN_PT_25K_8,lyr_PENDIDIKAN_PT_25K_9];
lyr_Wates_4.set('fieldAliases', {'OBJECT_ID': 'OBJECT_ID', 'KODE_DESA': 'KODE_DESA', 'DESA': 'DESA', 'KODE': 'KODE', 'PROVINSI': 'PROVINSI', 'KAB_KOTA': 'KAB_KOTA', 'KECAMATAN': 'KECAMATAN', 'DESA_KELUR': 'DESA_KELUR', 'JUMLAH_PEN': 'JUMLAH_PEN', 'JUMLAH_KK': 'JUMLAH_KK', 'LUAS_WILAY': 'LUAS_WILAY', 'KEPADATAN': 'KEPADATAN', 'PERPINDAHA': 'PERPINDAHA', 'JUMLAH_MEN': 'JUMLAH_MEN', 'PERUBAHAN': 'PERUBAHAN', 'WAJIB_KTP': 'WAJIB_KTP', 'SILAM': 'SILAM', 'KRISTEN': 'KRISTEN', 'KHATOLIK': 'KHATOLIK', 'HINDU': 'HINDU', 'BUDHA': 'BUDHA', 'KONGHUCU': 'KONGHUCU', 'KEPERCAYAA': 'KEPERCAYAA', 'PRIA': 'PRIA', 'WANITA': 'WANITA', 'BELUM_KAWI': 'BELUM_KAWI', 'KAWIN': 'KAWIN', 'CERAI_HIDU': 'CERAI_HIDU', 'CERAI_MATI': 'CERAI_MATI', 'U0': 'U0', 'U5': 'U5', 'U10': 'U10', 'U15': 'U15', 'U20': 'U20', 'U25': 'U25', 'U30': 'U30', 'U35': 'U35', 'U40': 'U40', 'U45': 'U45', 'U50': 'U50', 'U55': 'U55', 'U60': 'U60', 'U65': 'U65', 'U70': 'U70', 'U75': 'U75', 'TIDAK_BELU': 'TIDAK_BELU', 'BELUM_TAMA': 'BELUM_TAMA', 'TAMAT_SD': 'TAMAT_SD', 'SLTP': 'SLTP', 'SLTA': 'SLTA', 'DIPLOMA_I': 'DIPLOMA_I', 'DIPLOMA_II': 'DIPLOMA_II', 'DIPLOMA_IV': 'DIPLOMA_IV', 'STRATA_II': 'STRATA_II', 'STRATA_III': 'STRATA_III', 'BELUM_TIDA': 'BELUM_TIDA', 'APARATUR_P': 'APARATUR_P', 'TENAGA_PEN': 'TENAGA_PEN', 'WIRASWASTA': 'WIRASWASTA', 'PERTANIAN': 'PERTANIAN', 'NELAYAN': 'NELAYAN', 'AGAMA_DAN': 'AGAMA_DAN', 'PELAJAR_MA': 'PELAJAR_MA', 'TENAGA_KES': 'TENAGA_KES', 'PENSIUNAN': 'PENSIUNAN', 'LAINNYA': 'LAINNYA', 'GENERATED': 'GENERATED', 'KODE_DES_1': 'KODE_DES_1', 'BELUM_': 'BELUM_', 'MENGUR_': 'MENGUR_', 'PELAJAR_': 'PELAJAR_', 'PENSIUNA_1': 'PENSIUNA_1', 'PEGAWAI_': 'PEGAWAI_', 'TENTARA': 'TENTARA', 'KEPOLISIAN': 'KEPOLISIAN', 'PERDAG_': 'PERDAG_', 'PETANI': 'PETANI', 'PETERN_': 'PETERN_', 'NELAYAN_1': 'NELAYAN_1', 'INDUSTR_': 'INDUSTR_', 'KONSTR_': 'KONSTR_', 'TRANSP_': 'TRANSP_', 'KARYAW_': 'KARYAW_', 'KARYAW1': 'KARYAW1', 'KARYAW1_1': 'KARYAW1_1', 'KARYAW1_12': 'KARYAW1_12', 'BURUH': 'BURUH', 'BURUH_': 'BURUH_', 'BURUH1': 'BURUH1', 'BURUH1_1': 'BURUH1_1', 'PEMBANT_': 'PEMBANT_', 'TUKANG': 'TUKANG', 'TUKANG_1': 'TUKANG_1', 'TUKANG_12': 'TUKANG_12', 'TUKANG__13': 'TUKANG__13', 'TUKANG__14': 'TUKANG__14', 'TUKANG__15': 'TUKANG__15', 'TUKANG__16': 'TUKANG__16', 'TUKANG__17': 'TUKANG__17', 'PENATA': 'PENATA', 'PENATA_': 'PENATA_', 'PENATA1_1': 'PENATA1_1', 'MEKANIK': 'MEKANIK', 'SENIMAN_': 'SENIMAN_', 'TABIB': 'TABIB', 'PARAJI_': 'PARAJI_', 'PERANCA_': 'PERANCA_', 'PENTER_': 'PENTER_', 'IMAM_M': 'IMAM_M', 'PENDETA': 'PENDETA', 'PASTOR': 'PASTOR', 'WARTAWAN': 'WARTAWAN', 'USTADZ': 'USTADZ', 'JURU_M': 'JURU_M', 'PROMOT': 'PROMOT', 'ANGGOTA_': 'ANGGOTA_', 'ANGGOTA1': 'ANGGOTA1', 'ANGGOTA1_1': 'ANGGOTA1_1', 'PRESIDEN': 'PRESIDEN', 'WAKIL_PRES': 'WAKIL_PRES', 'ANGGOTA1_2': 'ANGGOTA1_2', 'ANGGOTA1_3': 'ANGGOTA1_3', 'DUTA_B': 'DUTA_B', 'GUBERNUR': 'GUBERNUR', 'WAKIL_GUBE': 'WAKIL_GUBE', 'BUPATI': 'BUPATI', 'WAKIL_BUPA': 'WAKIL_BUPA', 'WALIKOTA': 'WALIKOTA', 'WAKIL_WALI': 'WAKIL_WALI', 'ANGGOTA1_4': 'ANGGOTA1_4', 'ANGGOTA1_5': 'ANGGOTA1_5', 'DOSEN': 'DOSEN', 'GURU': 'GURU', 'PILOT': 'PILOT', 'PENGACARA_': 'PENGACARA_', 'NOTARIS': 'NOTARIS', 'ARSITEK': 'ARSITEK', 'AKUNTA_': 'AKUNTA_', 'KONSUL_': 'KONSUL_', 'DOKTER': 'DOKTER', 'BIDAN': 'BIDAN', 'PERAWAT': 'PERAWAT', 'APOTEK_': 'APOTEK_', 'PSIKIATER': 'PSIKIATER', 'PENYIA_': 'PENYIA_', 'PENYIA1': 'PENYIA1', 'PELAUT': 'PELAUT', 'PENELITI': 'PENELITI', 'SOPIR': 'SOPIR', 'PIALAN': 'PIALAN', 'PARANORMAL': 'PARANORMAL', 'PEDAGA_': 'PEDAGA_', 'PERANG_': 'PERANG_', 'KEPALA_': 'KEPALA_', 'BIARAW_': 'BIARAW_', 'WIRASWAST_': 'WIRASWAST_', 'LAINNYA_12': 'LAINNYA_12', 'LUAS_DESA': 'LUAS_DESA', 'KODE_DES_3': 'KODE_DES_3', 'DESA_KEL_1': 'DESA_KEL_1', 'KODE_12': 'KODE_12', });
lyr_sungai_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_pemukimian_rev_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_rev_7.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMERINTAHAN_PT_25K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PENDIDIKAN_PT_25K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_Wates_4.set('fieldImages', {'OBJECT_ID': '', 'KODE_DESA': '', 'DESA': '', 'KODE': '', 'PROVINSI': '', 'KAB_KOTA': '', 'KECAMATAN': '', 'DESA_KELUR': '', 'JUMLAH_PEN': '', 'JUMLAH_KK': '', 'LUAS_WILAY': '', 'KEPADATAN': '', 'PERPINDAHA': '', 'JUMLAH_MEN': '', 'PERUBAHAN': '', 'WAJIB_KTP': '', 'SILAM': '', 'KRISTEN': '', 'KHATOLIK': '', 'HINDU': '', 'BUDHA': '', 'KONGHUCU': '', 'KEPERCAYAA': '', 'PRIA': '', 'WANITA': '', 'BELUM_KAWI': '', 'KAWIN': '', 'CERAI_HIDU': '', 'CERAI_MATI': '', 'U0': '', 'U5': '', 'U10': '', 'U15': '', 'U20': '', 'U25': '', 'U30': '', 'U35': '', 'U40': '', 'U45': '', 'U50': '', 'U55': '', 'U60': '', 'U65': '', 'U70': '', 'U75': '', 'TIDAK_BELU': '', 'BELUM_TAMA': '', 'TAMAT_SD': '', 'SLTP': '', 'SLTA': '', 'DIPLOMA_I': '', 'DIPLOMA_II': '', 'DIPLOMA_IV': '', 'STRATA_II': '', 'STRATA_III': '', 'BELUM_TIDA': '', 'APARATUR_P': '', 'TENAGA_PEN': '', 'WIRASWASTA': '', 'PERTANIAN': '', 'NELAYAN': '', 'AGAMA_DAN': '', 'PELAJAR_MA': '', 'TENAGA_KES': '', 'PENSIUNAN': '', 'LAINNYA': '', 'GENERATED': '', 'KODE_DES_1': '', 'BELUM_': '', 'MENGUR_': '', 'PELAJAR_': '', 'PENSIUNA_1': '', 'PEGAWAI_': '', 'TENTARA': '', 'KEPOLISIAN': '', 'PERDAG_': '', 'PETANI': '', 'PETERN_': '', 'NELAYAN_1': '', 'INDUSTR_': '', 'KONSTR_': '', 'TRANSP_': '', 'KARYAW_': '', 'KARYAW1': '', 'KARYAW1_1': '', 'KARYAW1_12': '', 'BURUH': '', 'BURUH_': '', 'BURUH1': '', 'BURUH1_1': '', 'PEMBANT_': '', 'TUKANG': '', 'TUKANG_1': '', 'TUKANG_12': '', 'TUKANG__13': '', 'TUKANG__14': '', 'TUKANG__15': '', 'TUKANG__16': '', 'TUKANG__17': '', 'PENATA': '', 'PENATA_': '', 'PENATA1_1': '', 'MEKANIK': '', 'SENIMAN_': '', 'TABIB': '', 'PARAJI_': '', 'PERANCA_': '', 'PENTER_': '', 'IMAM_M': '', 'PENDETA': '', 'PASTOR': '', 'WARTAWAN': '', 'USTADZ': '', 'JURU_M': '', 'PROMOT': '', 'ANGGOTA_': '', 'ANGGOTA1': '', 'ANGGOTA1_1': '', 'PRESIDEN': '', 'WAKIL_PRES': '', 'ANGGOTA1_2': '', 'ANGGOTA1_3': '', 'DUTA_B': '', 'GUBERNUR': '', 'WAKIL_GUBE': '', 'BUPATI': '', 'WAKIL_BUPA': '', 'WALIKOTA': '', 'WAKIL_WALI': '', 'ANGGOTA1_4': '', 'ANGGOTA1_5': '', 'DOSEN': '', 'GURU': '', 'PILOT': '', 'PENGACARA_': '', 'NOTARIS': '', 'ARSITEK': '', 'AKUNTA_': '', 'KONSUL_': '', 'DOKTER': '', 'BIDAN': '', 'PERAWAT': '', 'APOTEK_': '', 'PSIKIATER': '', 'PENYIA_': '', 'PENYIA1': '', 'PELAUT': '', 'PENELITI': '', 'SOPIR': '', 'PIALAN': '', 'PARANORMAL': '', 'PEDAGA_': '', 'PERANG_': '', 'KEPALA_': '', 'BIARAW_': '', 'WIRASWAST_': '', 'LAINNYA_12': '', 'LUAS_DESA': '', 'KODE_DES_3': '', 'DESA_KEL_1': '', 'KODE_12': '', });
lyr_sungai_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_pemukimian_rev_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_rev_7.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PEMERINTAHAN_PT_25K_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PENDIDIKAN_PT_25K_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_Wates_4.set('fieldLabels', {'OBJECT_ID': 'no label', 'KODE_DESA': 'no label', 'DESA': 'inline label', 'KODE': 'no label', 'PROVINSI': 'no label', 'KAB_KOTA': 'no label', 'KECAMATAN': 'no label', 'DESA_KELUR': 'no label', 'JUMLAH_PEN': 'no label', 'JUMLAH_KK': 'no label', 'LUAS_WILAY': 'no label', 'KEPADATAN': 'no label', 'PERPINDAHA': 'no label', 'JUMLAH_MEN': 'no label', 'PERUBAHAN': 'no label', 'WAJIB_KTP': 'no label', 'SILAM': 'no label', 'KRISTEN': 'no label', 'KHATOLIK': 'no label', 'HINDU': 'no label', 'BUDHA': 'no label', 'KONGHUCU': 'no label', 'KEPERCAYAA': 'no label', 'PRIA': 'no label', 'WANITA': 'no label', 'BELUM_KAWI': 'no label', 'KAWIN': 'no label', 'CERAI_HIDU': 'no label', 'CERAI_MATI': 'no label', 'U0': 'no label', 'U5': 'no label', 'U10': 'no label', 'U15': 'no label', 'U20': 'no label', 'U25': 'no label', 'U30': 'no label', 'U35': 'no label', 'U40': 'no label', 'U45': 'no label', 'U50': 'no label', 'U55': 'no label', 'U60': 'no label', 'U65': 'no label', 'U70': 'no label', 'U75': 'no label', 'TIDAK_BELU': 'no label', 'BELUM_TAMA': 'no label', 'TAMAT_SD': 'no label', 'SLTP': 'no label', 'SLTA': 'no label', 'DIPLOMA_I': 'no label', 'DIPLOMA_II': 'no label', 'DIPLOMA_IV': 'no label', 'STRATA_II': 'no label', 'STRATA_III': 'no label', 'BELUM_TIDA': 'no label', 'APARATUR_P': 'no label', 'TENAGA_PEN': 'no label', 'WIRASWASTA': 'no label', 'PERTANIAN': 'no label', 'NELAYAN': 'no label', 'AGAMA_DAN': 'no label', 'PELAJAR_MA': 'no label', 'TENAGA_KES': 'no label', 'PENSIUNAN': 'no label', 'LAINNYA': 'no label', 'GENERATED': 'no label', 'KODE_DES_1': 'no label', 'BELUM_': 'no label', 'MENGUR_': 'no label', 'PELAJAR_': 'no label', 'PENSIUNA_1': 'no label', 'PEGAWAI_': 'no label', 'TENTARA': 'no label', 'KEPOLISIAN': 'no label', 'PERDAG_': 'no label', 'PETANI': 'no label', 'PETERN_': 'no label', 'NELAYAN_1': 'no label', 'INDUSTR_': 'no label', 'KONSTR_': 'no label', 'TRANSP_': 'no label', 'KARYAW_': 'no label', 'KARYAW1': 'no label', 'KARYAW1_1': 'no label', 'KARYAW1_12': 'no label', 'BURUH': 'no label', 'BURUH_': 'no label', 'BURUH1': 'no label', 'BURUH1_1': 'no label', 'PEMBANT_': 'no label', 'TUKANG': 'no label', 'TUKANG_1': 'no label', 'TUKANG_12': 'no label', 'TUKANG__13': 'no label', 'TUKANG__14': 'no label', 'TUKANG__15': 'no label', 'TUKANG__16': 'no label', 'TUKANG__17': 'no label', 'PENATA': 'no label', 'PENATA_': 'no label', 'PENATA1_1': 'no label', 'MEKANIK': 'no label', 'SENIMAN_': 'no label', 'TABIB': 'no label', 'PARAJI_': 'no label', 'PERANCA_': 'no label', 'PENTER_': 'no label', 'IMAM_M': 'no label', 'PENDETA': 'no label', 'PASTOR': 'no label', 'WARTAWAN': 'no label', 'USTADZ': 'no label', 'JURU_M': 'no label', 'PROMOT': 'no label', 'ANGGOTA_': 'no label', 'ANGGOTA1': 'no label', 'ANGGOTA1_1': 'no label', 'PRESIDEN': 'no label', 'WAKIL_PRES': 'no label', 'ANGGOTA1_2': 'no label', 'ANGGOTA1_3': 'no label', 'DUTA_B': 'no label', 'GUBERNUR': 'no label', 'WAKIL_GUBE': 'no label', 'BUPATI': 'no label', 'WAKIL_BUPA': 'no label', 'WALIKOTA': 'no label', 'WAKIL_WALI': 'no label', 'ANGGOTA1_4': 'no label', 'ANGGOTA1_5': 'no label', 'DOSEN': 'no label', 'GURU': 'no label', 'PILOT': 'no label', 'PENGACARA_': 'no label', 'NOTARIS': 'no label', 'ARSITEK': 'no label', 'AKUNTA_': 'no label', 'KONSUL_': 'no label', 'DOKTER': 'no label', 'BIDAN': 'no label', 'PERAWAT': 'no label', 'APOTEK_': 'no label', 'PSIKIATER': 'no label', 'PENYIA_': 'no label', 'PENYIA1': 'no label', 'PELAUT': 'no label', 'PENELITI': 'no label', 'SOPIR': 'no label', 'PIALAN': 'no label', 'PARANORMAL': 'no label', 'PEDAGA_': 'no label', 'PERANG_': 'no label', 'KEPALA_': 'no label', 'BIARAW_': 'no label', 'WIRASWAST_': 'no label', 'LAINNYA_12': 'no label', 'LUAS_DESA': 'no label', 'KODE_DES_3': 'no label', 'DESA_KEL_1': 'no label', 'KODE_12': 'no label', });
lyr_sungai_5.set('fieldLabels', {'NAMOBJ': 'inline label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_pemukimian_rev_6.set('fieldLabels', {'NAMOBJ': 'inline label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_rev_7.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PEMERINTAHAN_PT_25K_8.set('fieldLabels', {'NAMOBJ': 'inline label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PENDIDIKAN_PT_25K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_PENDIDIKAN_PT_25K_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});