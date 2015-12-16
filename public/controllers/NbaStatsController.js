'use strict'

nbaApp.controller("nbaCtrl", ["$http", "$log", nbaCtrl]);

function nbaCtrl($http, $log) {
  $log.info("Inside controller");
  var self = this

  self.allstars = ["LeBron James", "John Wall", "Kyle Lowry", "Carmelo Anthony", "Jeff Teague", "Jimmy Butler", "Dwyane Wade", "Kyle Korver", "Stephen Curry", "Kobe Bryant", "James Harden", "Klay Thompson", "Russell Westbrook", "Kevin Durant", "Chris Paul", "Damian Lillard", "Pau Gasol", "Al Horford", "Paul Millsap", "Chris Bosh", "Anthony Davis", "Marc Gasol", "Blake Griffin", "LaMarcus Aldridge", "Tim Duncan", "Dirk Nowitzki"];

  self.allstarInfo = [];
  allPlayers();

  var allPlayerInfo;
  var allPlayerInfoPts;

  self.teamColors = [
    self.atlantaHawks = {
    team: "ATL",
    primaryColor: '#01244C',
    secondaryColor: '#D21033'
  },

  self.bostonCeltics = {
    team: "BOS",
    primaryColor: '#05854C',
    secondaryColor: '#EAEFE9'
  },

  self.brooklynNets = {
    team: "BKN",
    primaryColor: '#061922',
    secondaryColor: '#E2E2E2'
  },

  self.charlotteHornets = {
    team: "CHA",
    primaryColor: '#1D1160',
    secondaryColor: '#008CA8'
  },

  self.chicagoBulls = {
    team: "CHI",
    primaryColor: '#CE1141',
    secondaryColor: '#061922'
  },

  self.clevelandCavaliers = {
    team: "CLE",
    primaryColor: '#860038',
    secondaryColor: '#FDBB30'
  },

  self.dallasMavericks = {
    team: "DAL",
    primaryColor: '#007DC5',
    secondaryColor: '#C4CED3'
  },

  self.denverNuggets = {
    team: "DEN",
    primaryColor: '#4D90CD',
    secondaryColor: '#FDB927'
  },

  self.detroitPistons = {
    team: "DET",
    primaryColor: '#ED174C',
    secondaryColor: '#006BB6'
  },

  self.goldenstateWarriors = {
    team: "GSW",
    primaryColor: '#FDB927',
    secondaryColor: '#006BB6'
  },

  self.houstonRockets = {
    team: "HOU",
    primaryColor: '#CE1141',
    secondaryColor: '#C4CED3'
  },

  self.indianaPacers = {
    team: "IND",
    primaryColor: '#FFC633',
    secondaryColor: '#00275D'
  },

  self.losangelesClippers = {
    team: "LAC",
    primaryColor: '#ED174C',
    secondaryColor: '#006BB6'
  },

  self.losangelesLakers = {
    team: "LAL",
    primaryColor: '#FDB927',
    secondaryColor: '#552582'
  },

  self.memphisGrizzlies = {
    team: "MEM",
    primaryColor: '#0F586C',
    secondaryColor: '#7399C6'
  },

  self.miamiHeat = {
    team: "MIA",
    primaryColor: '#98002E',
    secondaryColor: '#F9A01B'
  },

  self.milwaukeeBucks = {
    team: "MIL",
    primaryColor: '#00471B',
    secondaryColor: '#F0EBD2'
  },

  self.minnesotaTimberwolves = {
    team: "MIN",
    primaryColor: '#005083',
    secondaryColor: '#00A94F'
  },

  self.neworleansPelicans = {
    team: "NOP",
    primaryColor: '#002B5C',
    secondaryColor: '#B4975A'
  },

  self.newyorkKnicks = {
    team: "NYK",
    primaryColor: '#006BB6',
    secondaryColor: '#F58426'
  },

  self.oklahomacityThunder = {
    team: "OKC",
    primaryColor: '#007DC3',
    secondaryColor: '#FDBB30'
  },

  self.orlandoMagic = {
    team: "ORL",
    primaryColor: '#007DC5',
    secondaryColor: '#C4CED3'
  },

  self.philadelphia76ers = {
    team: "PHI",
    primaryColor: '#ED174C',
    secondaryColor: '#006BB6'
  },

  self.phoenixSuns = {
    team: "PHX",
    primaryColor: '#E56020',
    secondaryColor: '#1D1160'
  },

  self.portlandTrailblazers = {
    team: "POR",
    primaryColor: '#E03A3E',
    secondaryColor: '#061922'
  },

  self.sacramentoKings = {
    team: "SAC",
    primaryColor: '#724C9F',
    secondaryColor: '#8E9090'
  },

  self.sanantonioSpurs = {
    team: "SAS",
    primaryColor: '#BAC3C9',
    secondaryColor: '#061922'
  },

  self.torantoRaptors = {
    team: "TOR",
    primaryColor: '#CE1141',
    secondaryColor: '#061922'
  },

  self.utahJazz = {
    team: "UTA",
    primaryColor: '#002B5C',
    secondaryColor: '#00471B'
  },

  self.washingtonWizards = {
    team: "WAS",
    primaryColor: '#002B5C',
    secondaryColor: '#E31837'
  }
];





function allPlayers() {
  $http({
    method: 'JSONP',
    url:"http://stats.nba.com/stats/leaguedashptstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&Height=&LastNGames=0&LeagueID=00&Location=&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PerMode=PerGame&PlayerExperience=&PlayerOrTeam=Player&PlayerPosition=&PtMeasureType=SpeedDistance&Season=2015-16&SeasonSegment=&SeasonType=Regular+Season&StarterBench=&TeamID=0&VsConference=&VsDivision=&Weight=&callback=JSON_CALLBACK"
  }).then(function (response) {
    allPlayerInfo = response.data.resultSets[0].rowSet;
    getAllStars();
  })
  .catch(function (res) {
    $log.error('failure', res);
  });

}

function getAllStars(){
  for (var i = 0; i < allPlayerInfo.length; i++){
    for (var j = 0; j < self.allstars.length; j++){

      if (allPlayerInfo[i][1] == self.allstars[j]){
        self.allstarInfo.push(allPlayerInfo[i]);
      }

    }

  }
  allPlayerPts();
};


function allPlayerPts(){
  $http({
    method: 'JSONP',
    url:"http://stats.nba.com/stats/leagueleaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2015-16&SeasonType=Regular+Season&StatCategory=PTS&callback=JSON_CALLBACK"
  }).then(function (response) {
    allPlayerInfoPts = response.data.resultSet.rowSet;
    getAllStarsPts();
  })
  .catch(function (res) {
    $log.error('failure', res);
  });
}

function getAllStarsPts(){
  for (var i = 0; i < allPlayerInfoPts.length; i++){
    for (var j = 0; j < self.allstarInfo.length; j++){
      //if name in allPlayerPts array matches self.allstarInfo array
      if (allPlayerInfoPts[i][2] == self.allstarInfo[j][1]){
        //then push that player's points avg. into that player's allstarInfo array of array
        self.allstarInfo[j].push(allPlayerInfoPts[i][22]);
        //push in min/game
        self.allstarInfo[j].push(allPlayerInfoPts[i][5]);
        //push in field goal percentage
        self.allstarInfo[j].push(allPlayerInfoPts[i][8]);
        //push in 3pt fg percentage
        self.allstarInfo[j].push(allPlayerInfoPts[i][11]);
        //push in free throw percentage
        self.allstarInfo[j].push(allPlayerInfoPts[i][14]);
        //push in rebounds/game
        self.allstarInfo[j].push(allPlayerInfoPts[i][17]);
        //push in assists/game
        self.allstarInfo[j].push(allPlayerInfoPts[i][18]);
      }
    }
  }
  getColors();
}

function getColors() {
  for (var i = 0; i < self.allstarInfo.length; i++) {
    for (var j = 0; j < self.teamColors.length; j++) {
      if (self.allstarInfo[i][3] == self.teamColors[j].team){
        self.allstarInfo[i].push(self.teamColors[j].primaryColor);
        self.allstarInfo[i].push(self.teamColors[j].secondaryColor);
      }
  }
}
// debugger;
createGraph(self.allstarInfo);
}
};
