# İlk Script Dosyanızı Yazın

İlk script'inizi yazmak için scripts klasörüne gitmeniz gerekiyor.  
Eğer bu klasörün nerede olduğunu bilmiyorsanız [Script Nedir](/tutorial/IntroductionToScripting/WhatAreScripts) sayfasına göz atabilirsiniz.

Şimdi scripts klasörünün içerisinde olduğumuza göre `script.zs` adında bir dosya oluşturalım.

Bir metin editöründe `scripts.zs` dosyasını açarak aşağıdaki kod parçacığını yazınız.

```zenscript
println("Merhaba Dünya!");
```

Şimdi Minecraft'ı açın veya `/reload` komutunu çalıştırın. Ardından `crafttweaker.log` dosyasına bakınız (Eğer bu dosyanın nerede olduğunu bilmiyorsanız [CraftTweaker Log Dosyası](/tutorial/IntroductionToScripting/TheCraftTweakerLogFile) sayfasına göz atabilirsiniz).

`[DEBUG]` girdilerinin hepsiniz göz ardı edebilirsiniz. Aradığınız girdi şuna benzer bir şey olacak:

```plaintext
[05:05:41.856][DONE][CLIENT][INFO] Merhaba Dünya!
```

Eğer bu girdiyi bulduysan, bu çok iyi bir haber!  
Script dosyan oyuna yüklenmiş oldu. Oyunu özelleştirmek için ve oyuna yeni tarifler eklemek için artık hazırsın!

Eğer bu girdiyi bulamadıysan, bunun birkaç anlamı olabilir. Ya script dosyanız yüklenmemiştir ya da script dosyanızı yazdıktan sonra dosyayı kayıt etmeyi unutmuş olabilirsiniz (endişelenmeyin, bu bazen bizde de oluyor!).

Script dosyasının yüklenip yüklenmediğini kontrol etmek için şuna benzer bir satır olması gerekiyor:

```plaintext
[05:05:23.365][DONE][CLIENT][INFO] Loading file: script.zs
```

Eğer bunu bulamazsanız, bunun anlamı script dosyanızın yüklenmediğidir. Dosyanızın uzantısının `.txt` olmadığından emin olunuz ([Script Nedir](/tutorial/IntroductionToScripting/WhatAreScripts) sayfasında söylediğimiz gibi).

Ayrıca buna benzer bir satır olup olmadığını kontrol ediniz:

```plaintext
[05:08:57.688][DONE][CLIENT][ERROR]
```

Bu, script dosyanızın yüklendiği anlamına geliyor fakat bir hata meydana gelmiş (örneğin satır sonuna `;` yazmamak gibi). Bu yüzden dosyanızı kontrol edin ve her şeyin sorunsuza olduğundan emin olun.

Eğer hala hata alıyorsanız [CraftTweaker Discord](https://discord.blamejared.com) sunucumuza katılabilirsiniz. Size orada yardım edebiliriz.