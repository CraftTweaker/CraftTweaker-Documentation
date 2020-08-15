# 流体辞書

### インポート中

```zenscript
import mods.industrialforgoing.FluidDictionary;
```

### 追加中

入力として流体名、出力として流体名、変換速度が必要です。 レートは、原点から出力に変換されるmb の数です。 (InputMB * rate = OutputMB)

```zenscript
FluidDictionary.add(String input, String output, double rate);

FluidDictionary.add("essence", "xpjuice", 1);
```

### 削除中

流体名を入力、流体名を出力とする必要があります。

```zenscript
FluidDictionary.remove(String input, String output);

FluidDictionary.remove("essence", "xpjuice");
```