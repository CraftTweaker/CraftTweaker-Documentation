# Getting Started with scripts

CraftTweaker, `ZenScript` adı verilen özel bir betik dili kullanır. ZenScript, `<gamedir>/scripts` klasörü içerisindeki `.zs` uzantılı dosyalardan okunur. Eğer bu klasörün nerede olduğundan emin değilseniz, oyundayken `/ct scripts`  komutunu çalıştırırsanız klasörün kendisi açılacaktır.

ZenScript is a "top down" scripting language, meaning that, `Imports` need to be at the top of the file, `Variable Declarations` should be near the top of the file, however there are no restrictions to that, a `Variable` can be defined anywhere in a script, however it will not be accessible to the lines above the `Variable` declaration.


Script dosyaları `.zs` uzantısına sahiptirler. Uzantıların `.zs.txt` olmamasına dikkat ediniz.

## Script Nedir

Script dosyaları `<gamedir>/scripts` klasörünün içerisinde bulunurlar ve oyuncu bir dünyaya giriş yaptığında yüklenirler. Tıpkı daha önceki CraftTweaker versiyonlarında(1.12 hariç) olduğu gibi. Script dosyaları yeniden yüklenebilir bunun için `/reload` komutunu çalıştırmanız yeterlidir.

Script dosyaları bir dünyaya giriş yapıldığında iki kez yüklenir. Birincisi `Sunucu` tarafında, ikincisi ise `İstemci`  tarafıında. Eğer script dosyanızın içinde `println()` fonksiyonu var ise, bu fonksiyonun iki kez çalıştığını göreceksiniz.

Bu yaptığınız her değişikliğin iki kez çalışacağı anlamına gelmiyor. Script tarafından yapılan değişiklikler sunucu tarafında veya istemci tarafında çalışabilirler. Örneğin lokalizasyon ayarlama sadece istemci tarafında çalışırken yeni bir tarif(recipe) ekleme işlemi ise sadece sunucu tarafında çalışır.

Bir sunucuya girdiğinizde, o sunucu istemcinize kendi script dosyalarını gönderir. Böylelikle istemci de bu script dosyalarını çalıştırabilir. Bu, hiçbir script dosyasına sahip olmayan bir istemcinin bir sunucuya katılabileceği ve yapılan değişiklikleri (örneğin sunucuda bir eşyayı devre dışı bırakmak istiyorsanız ve kullanıcıların da fazladan dosya indirmesini istemiyorsanız bu tür değişiklikler kullanışlı olabilir) alabileceği anlamına gelmez.


### Writing your first script

Script dosyalarını kullanmaya başlamak için  `<gamedir>/scripts` klasörü içerisinde ` hello.zs` adında basit bir script dosyası oluşturabilirsiniz. Eğer bu klasörün nerede olduğunu bilmiyorsanız `/ct scripts` komutunu oyundayken çalıştırırsanız klasör açılacaktır.

In `hello.zs` put the following line

```zenscript
println("Merhaba Dünya!");
```

Şimdi Minecraft'ı tekrar açın ve  `<gamedir>/logs/crafttweaker.log` dosyasına bir göz atın (bu dosyayı varsayılan metin editörünüzde açmak için oyundayken `/ct log` komutunu da çalıştırabilirsiniz).

`crafttweaker.log`  dosyası, `<gamedir>/logs` içerisinde bulunur ve herhangi bir metin okuyabilen program tarafından kolay bir şekilde görüntülenebilir.

Script dosyalarını düzenlemek için Notepad++, Sublime Text veya VSCode kullanabilirsiniz. İsterseniz başka programlar da kullanabilirsiniz.

Script dosyalarını düzenlemek için bir program seçerken, o program içerisindeki söz dizimi vurgulayıcılarına(syntax highlighter) bir göz atın. Çoğu yaygın metin editörleri ZenScript için highlighting eklentilerine sahiptir.



### The crafttweaker.log file

The `crafttweaker.log` file uses a specific syntax in it's output, that syntax is:

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Using the example above, the output would be:

```
[14:58:06.697][DONE][SERVER][INFO] Merhaba Dünya!
```

Bilgileri bu şekilde görmek, hata ayıklamak için daha kullanışlıdır. Bu söz diziminin kullanılmadığı tek yer çıktı komutlarıdır. Yukarıdaki durumda mesajı ekrana bastırdı ve bitti. Böylelikle ekrana bastırılan bilgileri kopyalayıp yapıştırmak daha kolay olacaktır.

### Comments

Comments can be used to make your script files more readable and easier to understand!

ZenScript supports 3 types of comments, being:

Single line: `// I'm a single line comment!`

Alternate Single Line: `# I'm also a single line comment!`

Multiline:
```
/* I'm 
a
multiline comment! */
```

Ayrıca `#` sembolünü kullanarak önişlemciler için de yorum satırı oluşturabilirsiniz. Bu nedenle bunlar hala geçerli yorum satırları olsa da istenmeyen yan etkilere yol açabilirler. 