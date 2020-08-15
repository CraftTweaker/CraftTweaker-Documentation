# 没入型エンジニアリング

## クレジット:

これを通して私を助けてくれたり、MultiblockStagesから彼のコードの一部をリワークできるようにしてくれたので、クレジットはSkysomに出て行きます。

## 説明:

没入型エンジニアリングサポートは現在以下のもので構成されています:

- すべての IE マルチブロックの文字列名をダンプするためのコマンド。 
    - コマンド: /ct ieMultiBlocks
- Crt-based Syntaxを使用したマルチブロック ゲート。

### 構文

    空白の例:
    mods.compatskills.IEMTIBlockGate.addGate(String multiBlockName, String failureMessage, String... defaultRequirements);
    
    作業例:
    mods.compatskills.IEMmultiBlockGate.addGate("IE:DieselGenerator", "これはあなたのような馬鹿にはあまりにも複雑すぎると思う!", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:fusry/plant_seed");