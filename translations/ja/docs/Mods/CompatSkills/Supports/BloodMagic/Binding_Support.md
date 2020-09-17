# バインディングのサポート

## バインディング:

プレイヤーが条件を満たしていない場合、アイテムバインドはキャンセルされます。

### 1.4.0より前:

#### 構文

    空白の例:
    mods.compatskills.BindHandler.addBindLock(失敗メッセージの文字列、IItemStack スタック、文字列... requirements);
    
    テスト例:
    mods.compatskills.BindHandler.addBindLock("隠されていないダークエネルギーの渦巻きをあなたの周りとその下に置く", <bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minec
    

### Post-1.4.0

CompatSkills 1.4.0の時点で、ItemStack-Lockingの一部としてバインドロックが導入されました。 つまり、バインディングロックをアイテムに追加するための専用のスクリプト構文がなくなりました。

この変更はまた、いくつかの他の変更が付属しています。 例えば、表示されるデフォルトのエラーメッセージはいくつかの点で変更されています:

- チャットに要件とともにプレイヤー専用のステータス・メッセージとして表示されるようになりました
- エラーメッセージがローカライズ可能な文字列になりました: 

    compatskills.bloodmagic.bindingError=Untarded Dark Energysの渦を回り、その後、下へ
    

つまり、リソースパックの作成者は、エラーメッセージを任意の言語にローカライズできるようになりました。 これは、ResourceLoader や Base (ContentTweaker と共に) のような Mod を使用してエラー文字列を変更することもできます。