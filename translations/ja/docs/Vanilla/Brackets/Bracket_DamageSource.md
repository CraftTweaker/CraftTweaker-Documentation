# DamageSource Bracket Handler

ダメージソースブラケットハンドラーでは、ゲーム内で [IDamageSources](/Vanilla/Damage/IDamageSource/) を参照できます。

ダメージソースがあらかじめ定義されているものでない場合、与えられた名前の新しいものが作成されます。

<details>
    <summary>事前登録された被害元タイプ</summary>
    <ul>
        <li>最初に</li>
        <li>左揃え</li>
        <li>最初に</li>
        <li>LAVA</li>
        <li>FLOOR(_F)</li>
        <li>水平線(_W)</li>
        <li>CRAMMING</li>
        <li>DROWN</li>
        <li>開始</li>
        <li>CACTUS</li>
        <li>FALL</li>
        <li>Y_INTO_WALL</li>
        <li>ワールドの外</li>
        <li>GENERIC</li>
        <li>マギック語</li>
        <li>Wither</li>
        <li>Anvil</li>
        <li>偽のブロック</li>
        <li>DRAGON_BREATH</li>
        <li>ファイワークス</li>
    </ul>
</details>

```zenscript
<damageSource:type>;

<damageSource:IN_FIRE>;
```