# ブロックマテリアルブラケットハンドラー

Block Material Bracket Handlerでは、ゲーム内のBlock Materialsにアクセスできます。 現在サポートされている唯一のブロックマテリアルは次のとおりです。

<details>
    <summary>クリックしてマテリアルリストを展開します</summary>
    <ul>
        <li>空気</li>
        <li>草</li>
        <li>Ground</li>
        <li>木材</li>
        <li>岩</li>
        <li>合金</li>
        <li>金床</li>
        <li>水</li>
        <li>Lava</li>
        <li>葉</li>
        <li>植物</li>
        <li>Vine</li>
        <li>Sponge</li>
        <li>服</li>
        <li><unk></li>
        <li>砂地</li>
        <li>回路</li>
        <li>絨毯(カーペット)</li>
        <li>ガラス</li>
        <li>Redstone_Light</li>
        <li>TNT</li>
        <li>珊瑚（サンゴ）</li>
        <li>氷</li>
        <li>Packed_Ice</li>
        <li>作成された雪</li>
        <li>Cactus</li>
        <li>Clay</li>
        <li>Gourd</li>
        <li>Dragon_Egg</li>
        <li>ポータル</li>
        <li>ケーキ</li>
        <li>ウェブ</li>
    </ul>
</details>

ブロックマテリアルは、次の方法でマテリアルブラケットハンドラで参照されます。

```zenscript
<blockmaterial:name>

<blockmaterial:wood>
```

ブロックマテリアルが見つかれば、 [IMaterialDefinition](/Mods/ContentTweaker/Vanilla/Types/Block/IMaterialDefinition/) オブジェクトが返されます。