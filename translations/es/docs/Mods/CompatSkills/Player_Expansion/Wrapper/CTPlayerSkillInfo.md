# Capacidad del jugador

## Métodos

### getLevel()

    Ejemplo:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevel();
    
    Esto devuelve el nivel de la habilidad.
    

### getSkillPoints ()

    Ejemplo:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkillPoints();
    
    Esto devuelve el número de Puntos de Habilidad disponibles para gastar por esa Habilidad.
    

### getLevelUpCost()

    Ejemplo:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getLevelUpCost();
    
    Esto devuelve el coste de subida de nivel de la habilidad.
    

### getRank()

    Ejemplo:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getRank();
    
    Esto devuelve la cadena de rango actual para la habilidad.
    

### getSkill()

    Ejemplo:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).getSkill();
    
    Esto devuelve la Habilidad de la que estás recibiendo información.
    

### levelUp()

    Ejemplo:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).levelUp();
    
    Esto sube el nivel de la habilidad para el jugador.
    

### respecto()

    Ejemplo:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).respec();
    
    Esto "des-compra" todos los rasgos de esta habilidad específica y reembolsa todos los puntos de habilidad.
    

### desbloquear(CTUnlockable CtUnlockable, IPlayer player)

    Ejemplo:
    event.player.skillData.getSkillInfo(<skill:reskillable:agility>).unlock(<trait:reskillable:sidestep>, event.player);
    
    Esto desbloquea el rasgo proporcionado si está disponible bajo la habilidad del jugador proporcionado.