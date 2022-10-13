# Scriptler ile Başlayalım

CraftTweaker, `ZenScript` adı verilen özel bir betik dili kullanır. ZenScript, `<gamedir>/scripts` klasörü içerisindeki `.zs` uzantılı dosyalardan okunur. Eğer bu klasörün nerede olduğundan emin değilseniz, oyundayken `/ct scripts`  komutunu çalıştırırsanız klasörün kendisi açılacaktır.

ZenScript top-down(yukarıdan aşağıya) yaklaşımını kullanan bir dildir. Bu da `Import` kullanımının dosyanın en üstünde olması gerektiği anlamına gelir. `Değişken Tanımlamaları` da dosyanın üstüne yakın bir konumda kullanılmalıdır. Yine de dosyanın üstüne yakın bir konumda olacak diye kesin bir kural yok. Bir `Değişken` bir script içerisinde herhangi bir yerde tanımlanabilir. Fakat `Değişken` nerede tanımlandıysa, tanımlandığı satırdan önceki satırlarda bu değişkene erişilemez.


Script dosyaları `.zs` uzantısına sahiptirler. Uzantıların `.zs.txt` olmamasına dikkat ediniz.

## Script Nedir

Script dosyaları `<gamedir>/scripts` klasörünün içerisinde bulunurlar ve oyuncu bir dünyaya giriş yaptığında yüklenirler. Tıpkı daha önceki CraftTweaker versiyonlarında(1.12 hariç) olduğu gibi. Script dosyaları yeniden yüklenebilir bunun için `/reload` komutunu çalıştırmanız yeterlidir.

Script dosyaları bir dünyaya giriş yapıldığında iki kez yüklenir. Birincisi `Sunucu` tarafında, ikincisi ise `İstemci`  tarafıında. Eğer script dosyanızın içinde `println()` fonksiyonu var ise, bu fonksiyonun iki kez çalıştığını göreceksiniz.

Bu yaptığınız her değişikliğin iki kez çalışacağı anlamına gelmiyor. Script tarafından yapılan değişiklikler sunucu tarafında veya istemci tarafında çalışabilirler. Örneğin lokalizasyon ayarlama sadece istemci tarafında çalışırken yeni bir tarif(recipe) ekleme işlemi ise sadece sunucu tarafında çalışır.

Bir sunucuya girdiğinizde, o sunucu istemcinize kendi script dosyalarını gönderir. Böylelikle istemci de bu script dosyalarını çalıştırabilir. Bu, hiçbir script dosyasına sahip olmayan bir istemcinin bir sunucuya katılabileceği ve yapılan değişiklikleri (örneğin sunucuda bir eşyayı devre dışı bırakmak istiyorsanız ve kullanıcıların da fazladan dosya indirmesini istemiyorsanız bu tür değişiklikler kullanışlı olabilir) alabileceği anlamına gelmez.


### İlk Script Dosyanızı Yazın

Script dosyalarını kullanmaya başlamak için  `<gamedir>/scripts` klasörü içerisinde ` hello.zs` adında basit bir script dosyası oluşturabilirsiniz. Eğer bu klasörün nerede olduğunu bilmiyorsanız `/ct scripts` komutunu oyundayken çalıştırırsanız klasör açılacaktır.

`hello.zs` içerisine aşağıdaki kodu yazınız.

```zenscript
println("Merhaba Dünya!");
```

Şimdi Minecraft'ı tekrar açın ve  `<gamedir>/logs/crafttweaker.log` dosyasına bir göz atın (bu dosyayı varsayılan metin editörünüzde açmak için oyundayken `/ct log` komutunu da çalıştırabilirsiniz).

`crafttweaker.log`  dosyası, `<gamedir>/logs` içerisinde bulunur ve herhangi bir metin okuyabilen program tarafından kolay bir şekilde görüntülenebilir.

Script dosyalarını düzenlemek için Notepad++, Sublime Text veya VSCode kullanabilirsiniz. İsterseniz başka programlar da kullanabilirsiniz.

Script dosyalarını düzenlemek için bir program seçerken, o program içerisindeki söz dizimi vurgulayıcılarına(syntax highlighter) bir göz atın. Çoğu yaygın metin editörleri ZenScript için highlighting eklentilerine sahiptir.



### CraftTweaker Log Dosyası

`crafttweaker.log` dosyası çıktılarda kendi özel formatını kullanır. Bu format şu şekildedir:

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Yukarıdaki kod örneği için log çıktısı şöyle olacaktır:

```
[14:58:06.697][DONE][SERVER][INFO] Merhaba Dünya!
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

Ayrıca `#` sembolünü kullanarak önişlemciler için de yorum satırı oluşturabilirsiniz. Bu nedenle bunlar hala geçerli yorum satırları olsa da istenmeyen yan etkilere yol açabilirler. 