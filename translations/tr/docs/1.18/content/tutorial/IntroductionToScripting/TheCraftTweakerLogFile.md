# CraftTweaker Log Dosyası

CraftTweaker kendi log dosyasını kullanır. Bu hata ayıklama işleminin daha kolay olmasını sağlar. Diğer türlü latest.log dosyası içerisinde hatayı aramak gerekirdi.

### Konum

`latest.log` dosyası gibi `crafttweaker.log` dosyası da `logs` klasörünün içerisinde bulunabilir.

Ayrıa `/ct log` komutunu kullanarak log dosyasını varsayılan metin editörünüzle de açabilirsiniz.


### Format
`crafttweaker.log` dosyası çıktılarda kendi özel formatını kullanır. Bu format şu şekildedir:

```plaintext
[HH:MM:SS.ms][TYPE] <message>
```

Bunun nasıl görünebileceği ile ilgili bir örnek:

```plaintext
[14:58:06.697][INFO] Merhaba Dünya!
```


Bunu biraz daha açıklamak gerekirse:

Zaman (`HH:MM:SS.ms`) logların ne kadar yeni olup olmadığını görmek için bulunmaktadır. Ayrıca her bir işlemin ne kadar sürdüğünü de gösterir.

Type ise bize mesajın tipini söyler. Bu logların okunmasını oldukça kolaylaştırır. Ayrıca mesajın ciddiyetini de belirtir (örneğin tüm loglara bakmak yerine sadece `ERROR` loglarını ararsanız bu size sadece hatalarla ilgili logları getirecektir. Böylelikle `INFO` ve `DEBUG` loglarına bakmak zorunda kalmazsınız).