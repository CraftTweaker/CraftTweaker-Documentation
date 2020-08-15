# MobGriefing

Это событие вызывается, когда собирается вызвать потенциальную скорбь мобов. У него есть **результат** , который определяет, происходит ли поведение по умолчанию:

- **разрешить**: разрешен гриф
- **отрицает**: невозможно огорчить
- **по умолчанию**: грипп происходит в соответствии с логикой ванили.

## Класс события
You will need to cast the event in the function header as this class:  
`crafttweaker.event.MobGriefingEvent`  
You can, of course, also [import](/AdvancedFunctions/Import/) the class before and use that name then.

## Наследование от интерфейсов событий
MobGriefing Events реализуют следующие интерфейсы и также могут вызвать все их методы/getters/setters:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)
- [IEventHasResult](/Vanilla/Events/Events/IEventHasResult/)
