# サウンドタイプのブラケットハンドラー

SoundTypeブラケットハンドラーでは、ゲーム内のSoundTypesにアクセスできます。 現在サポートされている唯一のサウンドタイプは次のとおりです。

<details>
    <summary>クリックしてタイプリストを展開します</summary>
    <ul>
        <li>木材</li>
        <li>Ground</li>
        <li>植物</li>
        <li>石</li>
        <li>合金</li>
        <li>ガラス</li>
        <li>服</li>
        <li>砂地</li>
        <li>雪</li>
        <li>梯子</li>
        <li>金床</li>
        <li>Slime</li>
    </ul>
</details>

SoundTypeは以下の方法でSoundTypeブラケットハンドラで参照されます。

```zenscript
<soundtype:name>

<soundtype:wood>
```

soundType が見つかれば、 [ISoundTypeDefinition](/Mods/ContentTweaker/Vanilla/Types/Sound/ISoundTypeDefinition/) Object を返します。