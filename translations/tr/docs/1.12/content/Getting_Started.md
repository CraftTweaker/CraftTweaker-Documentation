# Scriptler ile Başlayalım

CraftTweaker, ZenScript adı verilen özel bir betik dili kullanır. `ZenScript`, `<gamedir>/scripts` klasörü içerisindeki `.zs` uzantılı dosyalardan okunur.

ZenScript top-down(yukarıdan aşağıya) yaklaşımını kullanan bir dildir. Bu da `Import` kullanımının dosyanın en üstünde olması gerektiği anlamına gelir. `Değişken Tanımlamaları` da dosyanın üstüne yakın bir konumda kullanılmalıdır. Yine de dosyanın üstüne yakın bir konumda olacak diye kesin bir kural yok. Bir `Değişken` bir script içerisinde herhangi bir yerde tanımlanabilir. Fakat `Değişken` nerede tanımlandıysa, tanımlandığı satırdan önceki satırlarda bu değişkene erişilemez.


## Introduction

Bir mod paketi yapmaya giriştiniz fakat modlar size birleşik bir deneyim sunmadı değil mi? Modlar geliştirilirken genellikle diğer modlardan bağımsız olarak geliştirilirler. Bu da size bazı modların diğer modlara göre daha zor olduğunu hissettirebilir. Mesela bazı eşyalar için daha iyi bir craft tarifi olduğunu düşünüyor olabilirsiniz. Veya belki de bir eşyayı oyundan kaldırmak için tüm modu silmek zorunda kalmak istemiyor olabilirsiniz. Ya da farklı modların aynı itemleri için daima aynı tarifleri üretmek zorunda kalmadan ore-dictionary tarifleri oluşturabilirsiniz. İşte bunların hepsini MineTweaker modunu öğrenerek yapabilirsiniz.

Sadece Vanilla minecraft tariflerini özelleştirmenin yanı sıra modlarda bulunan tarifleri de değiştirebilirsiniz. Bunlar mod makineleri için olan tarifler veya modun davranışı vs. olabilir.

## Scriptler

Script dosyaları `<minecraftdir>/scripts` klasörünün içerisinde bulunurlar ve Minecraft'ın `Ön Başlatma` aşamasında yüklenirler. CraftTweaker'ın önceki sürümlerinin aksine, scriptler yeniden yüklenemez. Bu Mojang'ın 1.12'de yaptığı değişikliklerden dolayı olmuştur ve şimdilik bir çözümü bulunmamaktadır. Ayrıca scriptlerin çalışabilmesi için **hem sunucu hem de istemci tarafında** bulunması gerekmektedir.

Script dosyaları `.zs` uzantısına sahiptirler. Script dosyaları `.zip` olarak sıkıştırılabilirler. Bu script dosyalarının okunmasına engel değildir.

### İlk Script Dosyanızı Yazın

Script kullanımına başlamak için `<minecraftdir>/scripts>` klasörü içerisinde `hello.zs` adında basit bir script dosyası oluşturabilirsiniz.

`hello.zs` içerisine aşağıdaki kodu yazınız.

```zenscript
println("Merhaba Dünya!");
```

Şimdi Minecraft'ı tekrar açın ve `crafttweaker.log` dosyasına bir göz atın.

`crafttweaker.log`  dosyası, `<minecraftdir>/logs` içerisinde bulunur ve herhangi bir metin okuyabilen program tarafından kolay bir şekilde görüntülenebilir.

Script dosyalarını düzenlemek için Notepad++, Sublime Text veya VSCode kullanabilirsiniz. İsterseniz başka programlar da kullanabilirsiniz.

### CraftTweaker Log Dosyası

`crafttweaker.log` dosyası çıktılarda kendi özel formatını kullanır. Bu format şu şekildedir:

```
[LOADERSTAGE][SIDE][TYPE] <message>
```

Yukarıdaki kod örneği için log çıktısı şöyle olacaktır:

```
[PREINITIALIZATION][CLIENT][INFO] Merhaba Dünya!
```

Bilgileri bu şekilde görmek, hata ayıklamak için daha kullanışlıdır. Bu söz diziminin kullanılmadığı tek yer çıktı komutlarıdır. Yukarıdaki durumda mesajı ekrana bastırdı ve bitti. Böylelikle ekrana bastırılan bilgileri kopyalayıp yapıştırmak daha kolay olacaktır.

### Yorumlar

Yorumlar script dosyanızın daha okunabilir ve daha anlaşılabilir olmasını sağlar.

ZenScript 3 tip yorum satırını destekler, bunlar:

Tek Satır: `// Ben tek satırlık bir yorum satırıyım!`

Alternatif Tek Satır: `Ben de tek satırlık bir yorum satırıyım!`

Çok satırlı:
```
/* Ben 
çok satırlı
bir yorum satırıyım! */
```
