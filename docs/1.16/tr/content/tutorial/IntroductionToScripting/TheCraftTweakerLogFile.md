# CraftTweaker Log Dosyası

CraftTweaker kendi log dosyasını kullanır. Bunun böyle olması hata ayıklamayı daha kolay bir hale getirmiştir.

### Konum

`latest.log` dosyası gibi `crafttweaker.log` dosyası da `logs` klasörünün içerisinde bulunabilir.

Ayrıa `/ct log` komutunu kullanarak log dosyasını varsayılan metin editörünüzle de açabilirsiniz.


### Format
`crafttweaker.log` dosyası çıktılarda kendi özel formatını kullanır. Bu format şu şekildedir:

```plaintext
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Bunun nasıl görünebileceği ile ilgili bir örnek:

```plaintext
[14:58:06.697][DONE][SERVER][INFO] Merhaba Dünya!
```

Bur format hata ayıklama amacıyla kullanılır. Bu formatın kullanılmadığı tek zaman komut dökümlerinin ekrana bastırıldığı zamandır. Ekrana mesaj bastırılacağı için mesajın kopyalanıp yapıştırılması daha kolay olacaktır.


Bunu biraz daha açıklamak gerekirse:

Zaman (`HH:MM:SS.ms`) logların ne kadar yeni olup olmadığını görmek için bulunmaktadır. Ayrıca her bir işlemin ne kadar sürdüğünü de gösterir.

LoaderStage, script dosyasının oyunun yaşam döngüsüne *ne zaman* yüklendiğini söyler (örneğin oyun başlarken veya bir dünyaya giriş yaparken).

Side ise script dosyasının hangi tarafta(`SERVER` veya `CLIENT`) çalıştığını söyler.

Type ise bize mesajın tipini söyler. Bu logların okunmasını çocuk oyuncağı haline getirir. Ayrıca mesajın ciddiyetini de belirtir (örneğin tüm loglara bakmak yerine sadece `ERROR` loglarını ararsanız bu size sadece hatalarla ilgili logları getirecektir. Böylelikle `INFO` ve `DEBUG` loglarına bakmak zorunda kalmazsınız).