const DATA = [
  {
    Type: "CONCERT",
    Id: 52591,
    Name: "Acoustic Guitar Evening: Melodies of Love",
    EventEndDate: "2023-10-18T22:00:00",
    Image:
      "https://im.haberTypek.com/l/2021/12/03/ver1638536162/3272038/jpg/640x360",
    Location: "Sound Stage",
    GeographicLocation: {
      Latitude: 41.0246,
      Longitude: 29.0054,
    },
    Description: "Acoustic guitar performances that will give you emotional moments.",
    TicketLink: "https://orneklink.com/bilet19",
    FreeEvent: false,
    Picture:
      "https://im.haberTypek.com/l/2021/12/03/ver1638536162/3272038/jpg/640x360",
    EventURL: "akustik-gitar-aksami-sevgi-melodileri",
    EventStartDate: "2023-10-18T20:30:00",
    Artist: "Eren Demir",
  },
  {
    Type: "THEATRE",
    Id: 52601,
    Name: "Klasik Komedi: Bir Delinin Hatıra Defteri",
    EventEndDate: "2023-10-20T21:30:00",
    Image:
      "https://tiyatrogunlugu.com/wp-content/uploads/genco-erkal-bir-delinin-hatira-defteri.jpg",
    Location: "Gülmece Tiyatro Sahnesi",
    GeographicLocation: {
      Latitude: 41.0299,
      Longitude: 29.0132,
    },
    Description: "Klasikleşmiş komedi eseri, gülmekten kırılacaksınız!",
    TicketLink: "https://orneklink.com/bilet20",
    FreeEvent: false,
    Picture:
      "https://tiyatrogunlugu.com/wp-content/uploads/genco-erkal-bir-delinin-hatira-defteri.jpg",
    EventURL: "klasik-komedi-bir-delinin-hatira-defteri",
    EventStartDate: "2023-10-20T19:00:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 52612,
    Name: "Ritim Akşamları: Latin Dans Partisi",
    EventEndDate: "2023-10-25T00:00:00",
    Image:
      "https://dansakademi.com.tr/uploads/2022/03/latin-dans-parcalari.webp",
    Location: "Salsa Dans Stüdyosu",
    GeographicLocation: {
      Latitude: 41.0165,
      Longitude: 29.0021,
    },
    Description: "Latin ritimleriyle dolu, dans dolu bir gece sizi bekliyor!",
    TicketLink: "https://orneklink.com/bilet21",
    FreeEvent: false,
    Picture:
      "https://dansakademi.com.tr/uploads/2022/03/latin-dans-parcalari.webp",
    EventURL: "ritim-aksamlari-latin-dans-partisi",
    EventStartDate: "2023-10-24T20:00:00",
    Artist: "Ritmo Latino Dans Grubu",
  },
  {
    Type: "EXHIBITION",
    Id: 5262,
    Name: "Doğanın İzinde: Doğa Fotoğrafçılığı Sergisi",
    EventEndDate: "2023-10-28T17:00:00",
    Image:
      "https://www.ekoiq.com/wp-content/uploads/2022/04/ekolojik-surdurulebilirlik-her-konunun-zemini-haline-gelmeli-551x431.jpg",
    Location: "Doğa Sanat Galerisi",
    GeographicLocation: {
      Latitude: 41.0217,
      Longitude: 28.9886,
    },
    Description:
      "Doğanın güzelliklerini yansıtan etkileyici doğa fotoğrafları sergisi.",
    TicketLink: null,
    FreeEvent: true,
    Picture:
      "https://www.ekoiq.com/wp-content/uploads/2022/04/ekolojik-surdurulebilirlik-her-konunun-zemini-haline-gelmeli-551x431.jpg",
    EventURL: "doganin-izinde-doga-fotografciligi-sergisi",
    EventStartDate: "2023-10-10T10:00:00",
    Artist: null,
  },
  {
    Type: "EXHIBITION",
    Id: 5250,
    Name: "Sinema Benim Aşkım - Türkan Soray Kostüm ve Afiş Sergisi",
    EventEndDate: "2023-09-17T17:30:00",
    Image:
      "https://kulTypesanat.izmir.bel.tr/YuklenenDosyalar/Etkinlikler/Thumb/20230814_143647_ic.jpg",
    Location: "Ahmed Adnan Saygun Sanat Merkezi",
    GeographicLocation: {
      Latitude: 38.4149,
      Longitude: 27.1287,
    },
    Description:
      "Yeşilçam`ın Sultanı Türkan Şoray`ın 1960`lardan günümüze kadar kullandığı kostümleri ve film afişleri sanatseverlerle buluşTypeuyor.",
    TicketLink: null,
    FreeEvent: true,
    Picture:
      "https://kulTypesanat.izmir.bel.tr/YuklenenDosyalar/Etkinlikler/Kucuk/20230814_143640_etkinlik.jpg",
    EventURL: "sinema-benim-askim-Typekan-soray-kostum-ve-afis-sergisi",
    EventStartDate: "2023-08-16T09:30:00",
    Artist: null,
    KisaAciklama:
      "Kara Walker’s powerful and provocative images that employ contradictions to critique the painful legacies of slavery, sexism, violence, imperialism, and other power structures, including those in the history and hierarchies of art and contemporary culture.",
    BiletSatisLinki: null,
    UcretsizMi: true,
    Resim:
      "https://kultursanat.izmir.bel.tr/YuklenenDosyalar/Etkinlikler/Kucuk/20230814_143640_etkinlik.jpg",
    EtkinlikUrl: "sinema-benim-askim-turkan-soray-kostum-ve-afis-sergisi",
    EtkinlikBaslamaTarihi: "2023-08-16T09:30:00",
    Sanatci: null,
  },
  {
    Type: "CONCERT",
    Id: 5251,
    Name: "Caz Gecesi: En İyi Caz Performansları",
    EventEndDate: "2023-09-20T23:00:00",
    Image:
      "https://www.bornova.bel.tr/wp-content/uploads/2023/06/My-project-1-22-1024x572.jpg",
    Location: "Jazz Up Sahne",
    GeographicLocation: {
      Latitude: 41.0085,
      Longitude: 28.9769,
    },
    Description:
      "Cazın büyüleyici dünyasına adım atacağınız unutulmaz bir gece.",
    TicketLink: "https://orneklink.com/bilet2",
    FreeEvent: false,
    Picture:
      "https://www.bornova.bel.tr/wp-content/uploads/2023/06/My-project-1-22-1024x572.jpg",
    EventURL: "caz-gecesi-en-iyi-caz-performanslari",
    EventStartDate: "2023-09-20T20:30:00",
    Artist: "Müge Ersoy",
  },
  {
    Type: "THEATRE",
    Id: 5252,
    Name: "Komedi Şöleni: Gülme Garantili Komedi Oyunları",
    EventEndDate: "2023-09-25T22:00:00",
    Image:
      "https://i4.hurimg.com/i/hurriyet/75/750x422/5d78c77145d2a023a0d35648.jpg",
    Location: "Gülmece Tiyatro Sahnesi",
    GeographicLocation: {
      Latitude: 41.0283,
      Longitude: 29.0015,
    },
    Description:
      "Karnınız ağrıyana kadar güleceğiniz, komedi dolu bir gece sizi bekliyor!",
    TicketLink: "https://orneklink.com/bilet3",
    FreeEvent: false,
    Picture:
      "https://i4.hurimg.com/i/hurriyet/75/750x422/5d78c77145d2a023a0d35648.jpg",
    EventURL: "komedi-soleni-gulme-garantili-komedi-oyunlari",
    EventStartDate: "2023-09-25T19:30:00",
    Artist: null,
  },
  {
    Type: "EXHIBITION",
    Id: 5253,
    Name: "Rönesans Rüzgarları: Ressamların Büyülü Dünyası",
    EventEndDate: "2023-09-30T18:00:00",
    Image: "https://flaps.club/wp-content/uploads/2019/04/unnamed-2.png",
    Location: "Sanat Çağı Galerisi",
    GeographicLocation: {
      Latitude: 41.0221,
      Longitude: 29.0058,
    },
    Description:
      "Rönesans dönemi ressamlarının eşsiz eserlerinin sergilendiği etkileyici bir sergi.",
    TicketLink: null,
    FreeEvent: true,
    Picture: "https://flaps.club/wp-content/uploads/2019/04/unnamed-2.png",
    EventURL: "ronesans-ruzgarlari-ressamlarin-buyulu-dunyasi",
    EventStartDate: "2023-09-20T10:00:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 5254,
    Name: "Rock Gecesi: Efsane Rock Gruplarından Seçkiler",
    EventEndDate: "2023-10-05T23:30:00",
    Image:
      "https://beyazgezegen.com/wp-content/uploads/2019/10/Ramones-1st_Album_Placeholder_Image.jpg",
    Location: "Rock Arena",
    GeographicLocation: {
      Latitude: 41.0117,
      Longitude: 28.9755,
    },
    Description:
      "Rock müziğin enerjisiyle dolu, unutulmaz bir gece sizi bekliyor!",
    TicketLink: "https://orneklink.com/bilet5",
    FreeEvent: false,
    Picture:
      "https://beyazgezegen.com/wp-content/uploads/2019/10/Ramones-1st_Album_Placeholder_Image.jpg",
    EventURL: "rock-gecesi-efsane-rock-gruplarindan-seckiler",
    EventStartDate: "2023-10-05T20:00:00",
    Artist: "Black Roses",
  },
  {
    Type: "THEATRE",
    Id: 5255,
    Name: "Dramatik Yolculuklar: Duygusal Tiyatro Gecesi",
    EventEndDate: "2023-10-10T21:30:00",
    Image:
      "https://cdn.evrimagaci.org/sZQwQgecN8z6NV4d4Nc3ckjvfCA=/evrimagaci.org%2Fpublic%2Fcontent_media%2F75009ecf55317438f7ed7b7e71dcd54a.jpg",
    Location: "Duygu Sahnesi",
    GeographicLocation: {
      Latitude: 41.0246,
      Longitude: 29.004,
    },
    Description:
      "Derin duyguların işlendiği etkileyici bir tiyatro performansı.",
    TicketLink: "https://orneklink.com/bilet6",
    FreeEvent: false,
    Picture:
      "https://cdn.evrimagaci.org/sZQwQgecN8z6NV4d4Nc3ckjvfCA=/evrimagaci.org%2Fpublic%2Fcontent_media%2F75009ecf55317438f7ed7b7e71dcd54a.jpg",
    EventURL: "dramatik-yolculuklar-duygusal-tiyatro-gecesi",
    EventStartDate: "2023-10-10T19:00:00",
    Artist: null,
  },
  {
    Type: "EXHIBITION",
    Id: 5256,
    Name: "Modern Sanatın İzinde: Soyut Tablolar Sergisi",
    EventEndDate: "2023-10-15T19:30:00",
    Image:
      "https://www.klashaber.com.tr/images/haberler/2020/07/istanbul_modernin_koleksiyon_sergisi_yenilendi_h42085_870be.jpg",
    Location: "Soyut Sanat Galerisi",
    GeographicLocation: {
      Latitude: 41.0189,
      Longitude: 28.9863,
    },
    Description:
      "Modern sanatın en çarpıcı örneklerini bulabileceğiniz bir sergi deneyimi.",
    TicketLink: null,
    FreeEvent: true,
    Picture:
      "https://www.klashaber.com.tr/images/haberler/2020/07/istanbul_modernin_koleksiyon_sergisi_yenilendi_h42085_870be.jpg",
    EventURL: "modern-sanatin-izinde-soyut-tablolar-sergisi",
    EventStartDate: "2023-10-01T13:00:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 5257,
    Name: "Klasik Akustik: En Sevilen Klasik Eseler",
    EventEndDate: "2023-10-18T22:00:00",
    Image:
      "https://www.kku.edu.tr/Content/Anasayfa/Haber/NewFolder/gitar3.jpg",
    Location: "Harmony CONCERT Salonu",
    GeographicLocation: {
      Latitude: 41.0102,
      Longitude: 28.9721,
    },
    Description:
      "Klasik müziğin büyülü dünyasına klasik gitar eşliğinde unutulmaz bir yolculuk.",
    TicketLink: "https://orneklink.com/bilet8",
    FreeEvent: false,
    Picture: "https://www.kku.edu.tr/Content/Anasayfa/Haber/NewFolder/gitar3.jpg",
    EventURL: "klasik-akustik-en-sevilen-klasik-eserler",
    EventStartDate: "2023-10-18T19:00:00",
    Artist: "Emre Aydın",
  },
  {
    Type: "THEATRE",
    Id: 5258,
    Name: "Gizemli Sahneler: Polisiye Tiyatro Gösterisi",
    EventEndDate: "2023-10-22T20:30:00",
    Image:
      "https://www.istanbulses.com/d/other/2022/03/07/aI8fltkqx1fd6av2xbn5zrwv.jpg",
    Location: "Gizem Tiyatro Sahnesi",
    GeographicLocation: {
      Latitude: 41.0297,
      Longitude: 29.0037,
    },
    Description:
      "Gizem ve heyecan dolu polisiye tiyatro eserleriyle unutulmaz bir akşam.",
    TicketLink: "https://orneklink.com/bilet9",
    FreeEvent: false,
    Picture:
      "https://www.istanbulses.com/d/other/2022/03/07/aI8fltkqx1fd6av2xbn5zrwv.jpg",
    EventURL: "gizemli-sahneler-polisiye-tiyatro-gosterisi",
    EventStartDate: "2023-10-22T18:00:00",
    Artist: null,
  },
  {
    Type: "EXHIBITION",
    Id: 52592,
    Name: "Fotoğrafın İzinde: Anıların Peşinde",
    EventEndDate: "2023-10-27T16:30:00",
    Image:
      "https://www.millireasuranssanatgalerisi.com/media/pages/exhibitions/past/sinasi-barutcu/73f7bef5c0-1634290574/a4069r5_studiomajo_r.jpeg",
    Location: "Anıt Galeri",
    GeographicLocation: {
      Latitude: 41.0158,
      Longitude: 28.9932,
    },
    Description:
      "Fotoğraflarla geçmişe nostaljik bir yolculuk: Anıların izinde sergisi.",
    TicketLink: null,
    FreeEvent: true,
    Picture:
      "https://www.millireasuranssanatgalerisi.com/media/pages/exhibitions/past/sinasi-barutcu/73f7bef5c0-1634290574/a4069r5_studiomajo_r.jpeg",
    EventURL: "fotografin-izinde-anilarin-pesinde",
    EventStartDate: "2023-10-15T10:30:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 52605,
    Name: "Jazz Gecesi: Akşamın Keyifli Notaları",
    EventEndDate: "2023-11-05T23:00:00",
    Image: "https://cazkolik.com/storage/gorseller/20130719_053932.jpg",
    Location: "Swing Jazz Club",
    GeographicLocation: {
      Latitude: 40.9865,
      Longitude: 29.0302,
    },
    Description:
      "Soul ve cazın eşsiz birleşimiyle dolu bir akşamın tadını çıkarın.",
    TicketLink: "https://orneklink.com/bilet11",
    FreeEvent: false,
    Picture: "https://cazkolik.com/storage/gorseller/20130719_053932.jpg",
    EventURL: "jazz-gecesi-aksamin-keyifli-notalari",
    EventStartDate: "2023-11-05T20:30:00",
    Artist: "Melis Sarp",
  },
  {
    Type: "THEATRE",
    Id: 52651,
    Name: "Komedi Rüzgarları: Gülme Krizine Davet",
    EventEndDate: "2023-11-10T22:00:00",
    Image:
      "https://cdn1.kralmuzik.com.tr/media/img/920x570/22-12/05/eser-berfu-yenenler.JPG",
    Location: "Komedi Sahnesi",
    GeographicLocation: {
      Latitude: 41.0218,
      Longitude: 28.9769,
    },
    Description:
      "Gülmekten karnınıza ağrı girecek bir komedi tiyatrosu deneyimi.",
    TicketLink: "https://orneklink.com/bilet12",
    FreeEvent: false,
    Picture:
      "https://cdn1.kralmuzik.com.tr/media/img/920x570/22-12/05/eser-berfu-yenenler.JPG",
    EventURL: "komedi-ruzgarlari-gulme-krizine-davet",
    EventStartDate: "2023-11-10T19:30:00",
    Artist: "Komedi Guruları Ekibi",
  },
  {
    Type: "CONCERT",
    Id: 5263,
    Name: "Pop Akustik: En İyi Yabancı Pop Şarkılar",
    EventEndDate: "2023-11-20T21:00:00",
    Image:
      "https://imgs.alem.com.tr/Documents/Alem_Dergi/images/2022/12/02/aralik-2022-konserleri-667.jpg",
    Location: "SoundUp CONCERT Salonu",
    GeographicLocation: {
      Latitude: 41.0056,
      Longitude: 28.985,
    },
    Description:
      "Pop müziğin hit şarkılarını akustik düzenlemelerle dinleyeceğiniz bir gece.",
    TicketLink: "https://orneklink.com/bilet14",
    FreeEvent: false,
    Picture:
      "https://imgs.alem.com.tr/Documents/Alem_Dergi/images/2022/12/02/aralik-2022-konserleri-667.jpg",
    EventURL: "pop-akustik-en-iyi-yabanci-pop-sarkilar",
    EventStartDate: "2023-11-20T18:30:00",
    Artist: "Dilara Oruç",
  },
  {
    Type: "THEATRE",
    Id: 5264,
    Name: "Klasikler Sahnesi: Shakespeare Oyunları Gecesi",
    EventEndDate: "2023-11-25T23:30:00",
    Image:
      "https://www.beyazhaberajansi.com/images/haberler/2023/08/harbiye-acik-hava-da-klasikler-gecidi-4406.jpg",
    Location: "Klasik Tiyatro Sahnesi",
    GeographicLocation: {
      Latitude: 40.9998,
      Longitude: 29.0204,
    },
    Description:
      "Shakespeare'ın en ünlü oyunlarının sahneleneceği büyülü bir gece.",
    TicketLink: "https://orneklink.com/bilet15",
    FreeEvent: false,
    Picture:
      "https://www.beyazhaberajansi.com/images/haberler/2023/08/harbiye-acik-hava-da-klasikler-gecidi-4406.jpg",
    EventURL: "klasikler-sahnesi-shakespeare-oyunlari-gecesi",
    EventStartDate: "2023-11-25T20:00:00",
    Artist: "Klasik Tiyatro Topluluğu",
  },
  {
    Type: "EXHIBITION",
    Id: 52265,
    Name: "Renk İçinde Dans: Modern Sanat Sergisi",
    EventEndDate: "2023-12-05T19:30:00",
    Image:
      "https://www.istanbulmodern.org/pic_lib/bigSize/resimgalerisi/120/istanbulmodernselmagurbuz3_120_5557789.jpg",
    Location: "Modern Sanat Galerisi",
    GeographicLocation: {
      Latitude: 41.0082,
      Longitude: 28.9765,
    },
    Description:
      "Renklerin ve formların dansının yer aldığı çağdaş sanatın izleri.",
    TicketLink: null,
    FreeEvent: true,
    Picture:
      "https://www.istanbulmodern.org/pic_lib/bigSize/resimgalerisi/120/istanbulmodernselmagurbuz3_120_5557789.jpg",
    EventURL: "renk-icinde-dans-modern-sanat-sergisi",
    EventStartDate: "2023-12-01T10:00:00",
    Artist: "Modern Sanatçılar Derneği",
  },
  {
    Type: "CONCERT",
    Id: 5266,
    Name: "Akustik Gitarın Büyülü Dünyası",
    EventEndDate: "2023-12-10T22:30:00",
    Image:
      "https://muzik.iksv.org/i/content/10058_1_PH_aliguler__(1_of_1)-22.jpg",
    Location: "Harmony CONCERT Salonu",
    GeographicLocation: {
      Latitude: 40.9937,
      Longitude: 29.0237,
    },
    Description:
      "Akustik gitarın nağmeleriyle dolu sıcacık bir CONCERT gecesi.",
    TicketLink: "https://orneklink.com/bilet17",
    FreeEvent: false,
    Picture:
      "https://muzik.iksv.org/i/content/10058_1_PH_aliguler__(1_of_1)-22.jpg",
    EventURL: "akustik-gitarin-buyulu-dunyasi",
    EventStartDate: "2023-12-10T20:00:00",
    Artist: "Ege Yılmaz",
  },
  {
    Type: "THEATRE",
    Id: 5267,
    Name: "Gizemli Yolculuk: Interaktif Tiyatro Deneyimi",
    EventEndDate: "2023-12-15T21:45:00",
    Image:
      "https://denemenlazim.net/wp-content/uploads/2016/02/IMG_0390-1280x720.jpg",
    Location: "Interaktif Tiyatro Sahnesi",
    GeographicLocation: {
      Latitude: 41.0125,
      Longitude: 28.9843,
    },
    Description:
      "İzleyicilerin hikayenin bir parçası olduğu sürükleyici bir tiyatro yolculuğu.",
    TicketLink: "https://orneklink.com/bilet18",
    FreeEvent: false,
    Picture:
      "https://denemenlazim.net/wp-content/uploads/2016/02/IMG_0390-1280x720.jpg",
    EventURL: "gizemli-yolculuk-interaktif-tiyatro-deneyimi",
    EventStartDate: "2023-12-15T19:00:00",
    Artist: "Interaktif Tiyatro Ekibi",
  },
  {
    Type: "EXHIBITION",
    Id: 5268,
    Name: "Işığın İzinde: Fotoğrafçılık Sergisi",
    EventEndDate: "2023-12-20T20:30:00",
    Image:
      "https://www.artfulliving.com.tr/image_data/content/7e2c2fb2c14982ee199b213709ff7022.jpg",
    Location: "FotoArt Galeri",
    GeographicLocation: {
      Latitude: 41.0067,
      Longitude: 28.9848,
    },
    Description:
      "Işık ve gölge oyunlarının yakalandığı etkileyici bir fotoğraf sergisi.",
    TicketLink: null,
    FreeEvent: true,
    Picture:
      "https://www.artfulliving.com.tr/image_data/content/7e2c2fb2c14982ee199b213709ff7022.jpg",
    EventURL: "isigin-izinde-fotografcilik-sergisi",
    EventStartDate: "2023-12-18T14:00:00",
    Artist: "Fotoğraf Sanatçıları Grubu",
  },
  {
    Type: "CONCERT",
    Id: 5269,
    Name: "Rock Efsaneleri Canlı: Unutulmaz Hits",
    EventEndDate: "2023-12-25T23:59:00",
    Image:
      "https://www.radyoodtu.com.tr/images/zbam/progresifmuzik_211219.jpg",
    Location: "RockArena Stadyumu",
    GeographicLocation: {
      Latitude: 40.9886,
      Longitude: 29.0231,
    },
    Description:
      "Rock müziğin efsanevi şarkılarına doyacağınız muhteşem bir CONCERT serisi.",
    TicketLink: "https://orneklink.com/bilet20",
    FreeEvent: false,
    Picture: "https://www.radyoodtu.com.tr/images/zbam/progresifmuzik_211219.jpg",
    EventURL: "rock-efsaneleri-canli-unutulmaz-hits",
    EventStartDate: "2023-12-25T20:00:00",
    Artist: "RockStar Tribute Band",
  },
  {
    Type: "THEATRE",
    Id: 5270,
    Name: "Romeo ve Juliet: Modern Yorum",
    EventEndDate: "2024-01-05T22:00:00",
    Image:
      "https://www.birdunyafilm.co/wp-content/uploads/2018/09/romeo-juliet-1996-1200-1200-675-675-crop-000000.jpg",
    Location: "Şehir Tiyatrosu",
    GeographicLocation: {
      Latitude: 41.0134,
      Longitude: 28.9799,
    },
    Description:
      "Klasikleşmiş aşk hikayesi Romeo ve Juliet'in modern bir yorumu.",
    TicketLink: "https://orneklink.com/bilet21",
    FreeEvent: false,
    Picture:
      "https://www.birdunyafilm.co/wp-content/uploads/2018/09/romeo-juliet-1996-1200-1200-675-675-crop-000000.jpg",
    EventURL: "romeo-ve-juliet-modern-yorum",
    EventStartDate: "2024-01-05T19:30:00",
    Artist: "Genç Sahne Oyuncuları",
  },
  {
    Type: "CONCERT",
    Id: 5271,
    Name: "Cazın Büyülü Dünyası: Geceyarısı Sesi",
    EventEndDate: "2024-01-10T23:00:00",
    Image:
      "https://www.gazetekadikoy.com.tr/Uploads/gazetekadikoy.com.tr/202206301910391-img.jpg",
    Location: "JazzClub",
    GeographicLocation: {
      Latitude: 41.0087,
      Longitude: 29.0126,
    },
    Description:
      "Cazın büyülü ritimleriyle geçecek unutulmaz bir CONCERT deneyimi.",
    TicketLink: "https://orneklink.com/bilet22",
    FreeEvent: false,
    Picture:
      "https://www.gazetekadikoy.com.tr/Uploads/gazetekadikoy.com.tr/202206301910391-img.jpg",
    EventURL: "cazin-buyulu-dunyasi-geceyarisi-sesi",
    EventStartDate: "2024-01-10T21:00:00",
    Artist: "Jazz Delisi Orkestrası",
  },
  {
    Type: "EXHIBITION",
    Id: 5272,
    Name: "Geleceğin İzleri: Dijital Sanat Sergisi",
    EventEndDate: "2024-01-15T18:30:00",
    Image:
      "https://static.wixstatic.com/media/9c95f9_1bd2debc26f04768a02d64e13d1d39d4~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9c95f9_1bd2debc26f04768a02d64e13d1d39d4~mv2.jpg",
    Location: "Dijital Sanat Galerisi",
    GeographicLocation: {
      Latitude: 41.0052,
      Longitude: 28.9814,
    },
    Description:
      "Teknolojinin sanatla buluştuğu dijital eserlerin sergilendiği etkinlik.",
    TicketLink: null,
    FreeEvent: true,
    Picture:
      "https://static.wixstatic.com/media/9c95f9_1bd2debc26f04768a02d64e13d1d39d4~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9c95f9_1bd2debc26f04768a02d64e13d1d39d4~mv2.jpg",
    EventURL: "gelecegin-izleri-dijital-sanat-sergisi",
    EventStartDate: "2024-01-12T10:30:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 5273,
    Name: "Sinfonietta Akşamları: Beethoven'in İzinde",
    EventEndDate: "2024-01-20T21:30:00",
    Image:
      "https://www.beyazhaberajansi.com/images/haberler/2023/07/idil-biret-muzik-festivali-7-temmuz-da-basliyor-8844.jpg",
    Location: "Devlet Senfoni Orkestrası CONCERT Salonu",
    GeographicLocation: {
      Latitude: 40.9879,
      Longitude: 29.0258,
    },
    Description:
      "Beethoven'ın büyülü eserleriyle dolu bir akşamın keyfini çıkarın.",
    TicketLink: "https://orneklink.com/bilet24",
    FreeEvent: false,
    Picture:
      "https://www.beyazhaberajansi.com/images/haberler/2023/07/idil-biret-muzik-festivali-7-temmuz-da-basliyor-8844.jpg",
    EventURL: "sinfonietta-aksamlari-beethovenin-izinde",
    EventStartDate: "2024-01-20T19:00:00",
    Artist: "Devlet Senfoni Orkestrası",
  },
  {
    Type: "THEATRE",
    Id: 5274,
    Name: "Büyülü Orman: Çocuk Tiyatro Gösterisi",
    EventEndDate: "2024-01-25T17:00:00",
    Image:
      "https://www.gundem67.com/images/upload/sihirli_orman_cocuk_tiyatrosu_sahnelendi_h103326_9aaef.jpg",
    Location: "Çocuk Tiyatro Sahnesi",
    GeographicLocation: {
      Latitude: 41.0091,
      Longitude: 28.9753,
    },
    Description:
      "Çocukların hayal dünyasına yolculuk ettiren eğlenceli bir tiyatro gösterisi.",
    TicketLink: "https://orneklink.com/bilet25",
    FreeEvent: false,
    Picture:
      "https://www.gundem67.com/images/upload/sihirli_orman_cocuk_tiyatrosu_sahnelendi_h103326_9aaef.jpg",
    EventURL: "buyulu-orman-cocuk-tiyatro-gosterisi",
    EventStartDate: "2024-01-25T15:30:00",
    Artist: "Çocuk Tiyatrosu Topluluğu",
  },
  {
    Type: "EXHIBITION",
    Id: 5275,
    Name: "Renk Şöleni: Modern Sanatın İzinde",
    EventEndDate: "2024-02-01T20:00:00",
    Image:
      "https://i0.wp.com/huseyinozbekar.com/wp-content/uploads/2023/04/Wassily-Kandinsky-Composition-VIII-1923.jpg?fit=640%2C442&ssl=1",
    Location: "Modern Sanat Galerisi",
    GeographicLocation: {
      Latitude: 41.0037,
      Longitude: 28.9876,
    },
    Description:
      "Farklı disiplinlerden modern sanat eserlerinin bir araya geldiği renkli sergi.",
    TicketLink: null,
    FreeEvent: true,
    Picture:
      "https://i0.wp.com/huseyinozbekar.com/wp-content/uploads/2023/04/Wassily-Kandinsky-Composition-VIII-1923.jpg?fit=640%2C442&ssl=1",
    EventURL: "renk-soleni-modern-sanatin-izinde",
    EventStartDate: "2024-01-29T11:00:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 5276,
    Name: "Akustik Geceler: Unplugged Performanslar",
    EventEndDate: "2024-02-05T23:30:00",
    Image:
      "https://cdn1.kralmuzik.com.tr/media/content/i/Events/1/4a8a65f097dc7947.jpg",
    Location: "Müzik Cafe",
    GeographicLocation: {
      Latitude: 41.0142,
      Longitude: 28.9749,
    },
    Description:
      "Ünlü şarkıcıların akustik, enstrümantal performanslarıyla dolu özel bir gece.",
    TicketLink: "https://orneklink.com/bilet27",
    FreeEvent: false,
    Picture:
      "https://cdn1.kralmuzik.com.tr/media/content/i/Events/1/4a8a65f097dc7947.jpg",
    EventURL: "akustik-geceler-unplugged-performanslar",
    EventStartDate: "2024-02-05T20:00:00",
    Artist: "Çeşitli Sanatçılar",
  },
  {
    Type: "THEATRE",
    Id: 5277,
    Name: "Komedi Manzaraları: Gülmek Garanti",
    EventEndDate: "2024-02-10T21:30:00",
    Image: "https://firsat.me/img/big/13880_5a688d80425cb_545x340.jpg",
    Location: "Güldürme Sahnesi",
    GeographicLocation: {
      Latitude: 41.0128,
      Longitude: 28.9871,
    },
    Description:
      "Komedinin en iyilerinin sahne aldığı eğlenceli bir tiyatro şöleni.",
    TicketLink: "https://orneklink.com/bilet28",
    FreeEvent: false,
    Picture: "https://firsat.me/img/big/13880_5a688d80425cb_545x340.jpg",
    EventURL: "komedi-manzaralari-gulmek-garanti",
    EventStartDate: "2024-02-10T19:00:00",
    Artist: "Komedi Guruları Topluluğu",
  },
  {
    Type: "EXHIBITION",
    Id: 5278,
    Name: "Rüya Gibi Fotoğraflar: Anı Yakalama Sanatı",
    EventEndDate: "2024-02-15T19:30:00",
    Image:
      "https://cdn1.ntv.com.tr/gorsel/bP74-d_4nkGDzjUXdrd_Bg.jpg?width=1000&mode=crop&scale=both",
    Location: "Fotoğraf Galerisi",
    GeographicLocation: {
      Latitude: 40.9976,
      Longitude: 29.0351,
    },
    Description:
      "Ünlü fotoğrafçıların anı yakalama sanatının sergilendiği etkinlik.",
    TicketLink: null,
    FreeEvent: true,
    Picture:
      "https://cdn1.ntv.com.tr/gorsel/bP74-d_4nkGDzjUXdrd_Bg.jpg?width=1000&mode=crop&scale=both",
    EventURL: "ruya-gibi-fotograflar-ani-yakalama-sanati",
    EventStartDate: "2024-02-12T15:00:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 5279,
    Name: "Dünya Ritmileri Gecesi",
    EventEndDate: "2024-02-20T22:30:00",
    Image:
      "https://cdn.seTypeday.com/content/uploads/makale_resimleri/layuc/slideruc/caz-ritimleriyle-buyulenmeye-30-nisan-dunya-caz-gunu-bc7828f5-aad3-434c-adfb-406baf61fcf0slider4-min.jpg",
    Location: "Kültür Merkezi",
    GeographicLocation: {
      Latitude: 41.0015,
      Longitude: 28.9827,
    },
    Description:
      "Farklı ülkelerden geleneksel ritimlerin harmanlandığı eşsiz bir CONCERT deneyimi.",
    TicketLink: "https://orneklink.com/bilet30",
    FreeEvent: false,
    Picture:
      "https://cdn.seTypeday.com/content/uploads/makale_resimleri/layuc/slideruc/caz-ritimleriyle-buyulenmeye-30-nisan-dunya-caz-gunu-bc7828f5-aad3-434c-adfb-406baf61fcf0slider4-min.jpg",
    EventURL: "dunya-ritmileri-gecesi",
    EventStartDate: "2024-02-20T20:00:00",
    Artist: "Dünya Ritm Grubu",
  },
  {
    Type: "FESTIVAL",
    Id: 5351,
    Name: "Yaz Müziği Festivali",
    EventEndDate: "2023-08-29T23:59:00",
    Image:
      "https://www.arcadium.com.tr/Blog/wp-content/uploads/2018/05/78961-1132x670.jpg",
    Location: "İstanbul Park",
    Description:
      "Yazın coşkusunu en iyi müziklerle yaşayacağınız muhteşem bir festival deneyimi!",
    TicketLink: "https://example.com/yaz-muzigi-festivali-biletleri",
    FreeEvent: false,
    Picture:
      "https://www.arcadium.com.tr/Blog/wp-content/uploads/2018/05/78961-1132x670.jpg",
    EventURL: "yaz-muzigi-festivali",
    EventStartDate: "2023-08-27T14:00:00",
    Artist: "Sezen Aksu, Teoman, Duman, Athena",
  },
  {
    Type: "FESTIVAL",
    Id: 5372,
    Name: "Yaz Renkleri Müzik Festivali",
    EventEndDate: "2023-09-03T23:59:00",
    Image:
      "https://www.avruparuyasi.blog/images/blog/3269_otobusle-avrupa-Typeu-avrupa-ruyasi-fransa-paris-festivaller-La-F%C3%AAte-de-la-Musique.jpg",
    Location: "Açık Hava Alanı",
    Description:
      "Yazın tadını çıkarabileceğiniz renkli ve enerjik bir müzik festivali.",
    TicketLink: "https://example.com/yaz-renkleri-festival-biletleri",
    FreeEvent: false,
    Picture:
      "https://www.avruparuyasi.blog/images/blog/3269_otobusle-avrupa-Typeu-avrupa-ruyasi-fransa-paris-festivaller-La-F%C3%AAte-de-la-Musique.jpg",
    EventURL: "yaz-renkleri-muzik-festivali",
    EventStartDate: "2023-09-02T16:00:00",
    Artist: "Sanatçı C, Sanatçı D",
  },
  {
    Type: "BASH",
    Id: 5381,
    Name: "Bilim ve Gelecek Paneli",
    EventEndDate: "2023-09-10T21:00:00",
    Image: "https://i.dha.com.tr/i/dha/75/0x0/61f072ac45d2a01ef449bab3.jpg",
    Location: "Bilim Kültür Merkezi",
    Description:
      "Bilim insanlarının katılacağı ilgi çekici bir gelecek paneli.",
    TicketLink: "https://example.com/gelecek-paneli-biletleri",
    FreeEvent: true,
    Picture: "https://i.dha.com.tr/i/dha/75/0x0/61f072ac45d2a01ef449bab3.jpg",
    EventURL: "bilim-ve-gelecek-paneli",
    EventStartDate: "2023-09-10T18:30:00",
    Artist: null,
  },
  {
    Type: "SPORTS",
    Tur: "SPORT",
    Id: 5382,
    Name: "Yoga ve Meditasyon Workshop",
    EventEndDate: "2023-09-08T19:30:00",
    Image:
      "https://yogakiooTypekiye.com/wp-content/uploads/2023/07/IMG_1218-scaled.jpg",
    Location: "Yoga Merkezi",
    Description:
      "Zihin ve beden sağlığınıza katkı sağlayacak yoga ve meditasyon workshop'u.",
    TicketLink: "https://example.com/yoga-workshop-biletleri",
    FreeEvent: false,
    Picture:
      "https://yogakiooTypekiye.com/wp-content/uploads/2023/07/IMG_1218-scaled.jpg",
    EventURL: "yoga-ve-meditasyon-workshop",
    EventStartDate: "2023-09-08T17:00:00",
    Artist: null,
  },
  {
    Type: "FESTIVAL",
    Id: 5402,
    Name: "Çiçek Festivali",
    EventEndDate: "2023-09-05T20:00:00",
    Image:
      "https://iasbh.tmgrup.com.tr/6a0c7a/650/344/0/22/660/368?u=https://isbh.tmgrup.com.tr/sbh/2023/05/03/24-uluslararasi-bayindir-cicek-festivali-basliyor-1683118121164.jpg",
    Location: "Park Alanı",
    Description: "Renkli çiçeklerle dolu büyüleyici bir festival deneyimi.",
    TicketLink: null,
    FreeEvent: true,
    Picture:
      "https://iasbh.tmgrup.com.tr/6a0c7a/650/344/0/22/660/368?u=https://isbh.tmgrup.com.tr/sbh/2023/05/03/24-uluslararasi-bayindir-cicek-festivali-basliyor-1683118121164.jpg",
    EventURL: "cicek-festivali",
    EventStartDate: "2023-09-02T10:00:00",
    Artist: null,
    GeographicLocation: {
      Latitude: 40.7128,
      Longitude: -74.006,
    },
  },

  // TALKSHOW türündeki etkinlikler
  {
    Type: "BASH",
    Id: 5407,
    Name: "CASA-A Night to Dismember",
    EventEndDate: "2023-09-12T20:30:00",
    Image:
      "https://istanbulgazetesicomtr.teimg.com/crop/1280x720/istanbulgazetesi-com-tr/images/haberler/2022/12/bagimlilikla_mucadelede_ailelere_ve_okullara_buyuk_is_dusuyor_h84932_a7517.jpg",
    Location: "Kültür Merkezi",
    Description:
      "A night of horror and gore with the best of music from DJ Alex Han.",
    TicketLink: "https://example.com/psikoloji-sohbetleri-biletleri",
    FreeEvent: false,
    Picture:
      "https://istanbulgazetesicomtr.teimg.com/crop/1280x720/istanbulgazetesi-com-tr/images/haberler/2022/12/bagimlilikla_mucadelede_ailelere_ve_okullara_buyuk_is_dusuyor_h84932_a7517.jpg",
    EventURL: "psikoloji-sohbetleri",
    EventStartDate: "2023-09-12T18:00:00",
    Artist: null,
    GeographicLocation: {
      Latitude: 52.52,
      Longitude: 13.405,
    },
  },
  {
    Type: "BASH",
    Id: 5408,
    Name: "Teknoloji Sohbetleri",
    EventEndDate: "2023-09-06T19:00:00",
    Image:
      "https://www.teknolojisohbetleri.com/s/2502/i/teknoloji_sohbet-logo-renkli.png",
    Location: "İnovasyon Merkezi",
    Description:
      "Teknoloji dünyasının önde gelen isimlerinin katılacağı bir teknoloji sohbeti.",
    TicketLink: null,
    FreeEvent: true,
    Picture:
      "https://www.teknolojisohbetleri.com/s/2502/i/teknoloji_sohbet-logo-renkli.png",
    EventURL: "teknoloji-sohbetleri",
    EventStartDate: "2023-09-06T16:30:00",
    Artist: null,
    GeographicLocation: {
      Latitude: 37.7749,
      Longitude: -122.4194,
    },
  },

  // SPORTS türündeki etkinlikler
  {
    Type: "SPORTS",
    Id: 5409,
    Name: "Bisiklet Typeu",
    EventEndDate: "2023-09-09T12:00:00",
    Image:
      "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1832000/sakarya-buyuk-bisiklet-Typeu-aa-1833973.jpg",
    Location: "Şehir Parkuru",
    Description: "Doğayla iç içe keyifli bir bisiklet Typeu deneyimi.",
    TicketLink: "https://example.com/bisiklet-Typeu-biletleri",
    FreeEvent: false,
    Picture:
      "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1832000/sakarya-buyuk-bisiklet-Typeu-aa-1833973.jpg",
    EventURL: "bisiklet-Typeu",
    EventStartDate: "2023-09-09T09:00:00",
    Artist: null,
    GeographicLocation: {
      Latitude: 40.7128,
      Longitude: -74.006,
    },
  },
  {
    Type: "SPORTS",
    Id: 5410,
    Name: "Tenis Typenuvası",
    EventEndDate: "2023-09-12T17:30:00",
    Image:
    Adi: "Intramural Basketball",
    EtkinlikBitisTarihi: "2023-09-12T17:30:00",
    KucukAfis:
      "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/46000/46340.jpg",
    Location: "Lyons Gym Center",
    Description: "Heyecan dolu bir tenis Typenuvası ve rekabet dolu maçlar.",
    TicketLink: "https://example.com/tenis-Typenuvasi-biletleri",
    FreeEvent: false,
    Picture: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/46000/46340.jpg",
    EventURL: "tenis-Typenuvasi",
    EventStartDate: "2023-09-12T14:00:00",
    Artist: null,
    GeographicLocation: {
      Latitude: 34.0224,
      Longitude: 118.2851,
    },
  },
];

export const getCategories = () => {
  let categories = [];
  DATA.forEach((activity) => {
    if (!categories.includes(activity.Type)) {
      categories.push(activity.Type);
    }
  });
  return categories;
};

export const getEventsByCategory = (category) => {
  return DATA.filter((activity) => activity.Type === category);
};

export const getAllEvent = () => {
  return DATA;
};

export const getEventById = (id) => {
  return DATA.find((activity) => activity.Id === id);
};

export const getOldEvents = () => {
  return DATA.filter((activity) => {
    let today = new Date();
    let eventDate = new Date(activity.EventStartDate);
    return eventdate < today;
  });
};
