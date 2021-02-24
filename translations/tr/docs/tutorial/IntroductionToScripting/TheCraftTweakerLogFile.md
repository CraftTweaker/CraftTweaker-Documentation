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

The Time (`HH:MM:SS.ms`) is included mainly as a way to ensure that logs are fresh, but it also gives some insight on how long each task is taking.

The LoaderStage tells us *when* the script is loaded in the game life cycle (while the game is still starting up, or when joining a world for example).

The Side (`SERVER` or `CLIENT`) tells us which logical thread the script is running on.

the Type tells us the type of message, it makes navigating logs a breeze and tells you the severity of the message (Simply searching `ERROR` ins a log file can show you were all the errors are without having to sift through all the `INFO` or `DEBUG` outputs).