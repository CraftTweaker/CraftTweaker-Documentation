# CTGUI

Вы можете использовать команду для вызова GUI внутри игры, в котором можно редактировать рецепты. Все рецепты появятся в папке скриптов в файле recipes.zs.

<details><summary>Background story</summary>
Some people don't fancy text editors. Даже использование подсветки синтаксиса их не удовлетворяет. They want a GUI (Graphical User Interface).  
For this matter, Jared, humble servant of Lord Ellpeck of House penguin, rightful heir to the Milkshake Throne, King of the Seven Kingdoms of Germany, the Rhoynar and the First Men, Mother of penguins, the modder of the great frozen plains, the unbroken and breaker of mods, has descended upon us from Maven, the great Library of Forbidden Wisdom and Blasphemy to share his great knowledge with mankind, after being urged by BBoldt, traveller of realms, slayer of the great Unknown, writer of Necrochodu. К сожалению, мы еще не в состоянии расшифровать случайную забастовку, откуда он пришел, поэтому вместо этого он решил пойти на более простую форму помощи, дав людям, обладающим силой управлять законами вселенной (которых также называют `операторами` или `админами`), магическое окно внутри игры, в которую они любят играть, и менять основы этой ложной реальности с его помощью. </details>

## Вызов команды
Вы можете вызвать команду с помощью
```
/CTGUI id
```

Сейчас реализованы следующие id:

| ID            | Добавляется  | Notes |
| ------------- | ------------ | ----- |
| craftingtable | CraftTweaker |       |
| furnace       | CraftTweaker |       |

Примечание: Эта команда работает только в одиночной игре. В мультиплеере сервер скажет, что такой команды нет. Редактируйте рецепты в одиночной игре и объедините/загрузите скрипт на свой сервер.
