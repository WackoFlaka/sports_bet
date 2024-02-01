let bank = 100

const players = [
    {
      name: "D'Marcus Williums",
      teamNumber: 0,
      emoji: '🏃‍♂️',
      skill: 10
    },
    {
      name: "Tyroil Smoochie-Wallace",
      teamNumber: 0,
      emoji: '🤾‍♂️',
      skill: 30
    },
    {
      name: "Jackmerius Tacktheratrix",
      teamNumber: 0,
      emoji: '🏇',
      skill: 88
    },
    {
      name: "Javaris Jamar Javarison-Lamar",
      teamNumber: 0,
      emoji: '🏌️‍♀️',
      skill: 15
    },
    {
      name: "D'Pez Poopsie",
      teamNumber: 0,
      emoji: '🏋️‍♂️',
      skill: 77
    },
    {
      name: "D'Jasper Probincrux III",
      teamNumber: 0,
      emoji: '🏌️‍♂️',
      skill: 21
    },
    {
      name: "Leoz Maxwell Jilliumz",
      teamNumber: 0,
      emoji: '🤾',
      skill: 5
    },
    {
      name: "Hingle McCringleberry",
      teamNumber: 0,
      emoji: '🏂',
      skill: 99
    },
    {
      name: "L'Carpetron Dookmarriot",
      teamNumber: 0,
      emoji: '🧘‍♀️',
      skill: 50
    },
    {
      name: "Xmus Jaxon Flaxon-Waxon",
      teamNumber: 0,
      emoji: '🚶‍♀️',
      skill: 1
    },
    {
      name: "Saggitariutt Jefferspin",
      teamNumber: 0,
      emoji: '🏋️‍♀️',
      skill: 61
    },
    {
      name: "Quatro Quatro",
      teamNumber: 0,
      emoji: '🤺',
      skill: 34
    },
    {
      name: "X-Wing @Aliciousness",
      teamNumber: 0,
      emoji: '🏄',
      skill: 71
    },
    {
      name: "Bisquiteen Trisket",
      teamNumber: 0,
      emoji: '🧜‍♂️',
      skill: 76
    },
    {
      name: "Scoish Velociraptor Maloish",
      teamNumber: 0,
      emoji: '🤸',
      skill: 47
    },
    {
      name: "Donkey Teeth",
      teamNumber: 0,
      emoji: '⛹️‍♀️',
      skill: 23
    },
    {
      name: "T.J. A.J. R.J. Backslashinfourth V",
      teamNumber: 0,
      emoji: '🕴️',
      skill: 58
    },
    {
      name: "Firstname Lastname",
      teamNumber: 0,
      emoji: '💃',
      skill: 99
    },
    {
      name: "Dan Smith",
      teamNumber: 0,
      emoji: '🧍‍♂️',
      skill: 3
    },
    {
      name: "Tiger",
      teamNumber: 0,
      emoji: '🐅',
      skill: 100
    },
  ]
  
  // array is named players
  
  function draftPlayers() {
    players.forEach(player => {
        const randomIndex = Math.ceil(Math.random() * 2)
        player.teamNumber = randomIndex
    })
    console.log(players)
    drawPlayers()
  }
  
  function drawPlayers() {
    let teamOneEmojis = ''
    let teamTwoEmojis = ''
    
    const teamOne = players.filter(one => one.teamNumber == 1)
    const teamTwo = players.filter(two => two.teamNumber == 2)
    
    teamOne.forEach(one => teamOneEmojis += one.emoji)
    teamTwo.forEach(two => teamTwoEmojis += two.emoji)
    
    const teamOneElement = document.getElementById('team1')
    const teamTwoElement = document.getElementById('team2')
    teamOneElement.innerText = teamOneEmojis
    teamTwoElement.innerText = teamTwoEmojis
  }
  
  function betTeam1(num) {
        let teamOneTotal = 0
        let teamTwoTotal = 0
    
        const teamOneSkill = players.filter(player => player.teamNumber == 1)
        teamOneSkill.forEach(player => teamOneTotal += player.skill)
        
        const teamTwoSkill = players.filter(player => player.teamNumber == 2)
        teamTwoSkill.forEach(player => teamTwoTotal += player.skill)
    
        if(num > bank) {
            window.alert("You dont have enough!")
            return
        }
        
        
        if(teamOneTotal > teamTwoTotal) {
            bank += num
        } else {
            bank -= num
        }
        
        if(bank <= 0) {
            window.alert('YOU ARE BROKE')
            gameOver()
        }
        
        
        drawBank()
  }
  
  function betTeam2(num) {
        let teamOneTotal = 0
        let teamTwoTotal = 0
    
        const teamOneSkill = players.filter(player => player.teamNumber == 1)
        teamOneSkill.forEach(player => teamOneTotal += player.skill)
        
        const teamTwoSkill = players.filter(player => player.teamNumber == 2)
        teamTwoSkill.forEach(player => teamTwoTotal += player.skill)
        
        if(num > bank) {
            window.alert("You dont have enough!")
            return
        }
    
        if(teamTwoTotal > teamOneTotal) {
            bank += num
        } else {
            bank -= num
        }
        
        if(bank <= 0) {
            window.alert('YOU ARE BROKE')
            gameOver()
        }
        
        drawBank()
  }
  
  function betAll() {
    
  }
  
  function drawBank() {
    document.getElementById('bank').innerHTML = bank
    draftPlayers()
  }
  
  function gameOver() {
    bank += 100
  }
  
  draftPlayers()