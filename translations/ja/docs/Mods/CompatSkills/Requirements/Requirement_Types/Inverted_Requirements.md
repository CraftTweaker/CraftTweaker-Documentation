# 反転条件:

## [NOTICE]

反転要件は廃止され、NOT-Logical Operatorによって内部的に置き換えられます。 これは、反転された要件が自動的にNOT-Operatorに変換されることを意味します。 この要件タイプの使用はご遠慮ください。 **レガシーサポート**

## Inverted-requirements

反転された要件は1.4.0+コンパットスキル機能のみです! 必要なコンポーネントがない限り、反転要件はロック解除されます。 指定されたレベル以上のスキルがない限り、反転スキル要件が解除されます。

Inverted-Syntaxは以下の通りです:

    例:
    !adv|
    !dim|
    !stage|
    !skill|
    !trait|
    
    
    作業例:
    !adv|minecraft:fusrry/plant_seed
    !dim|0
    !stage|test
    !skill|reskillable:building|15
    !trait|reskillable:battribuild|