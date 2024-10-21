// เลือกอีเลเมนต์ของรูปภาพ
var havelunchImg = document.querySelector('.container-havelunch img');
var haveashowerImg = document.querySelector('.container-haveashower img');
var learnatschoolImg = document.querySelector('.container-learnatschool img');
var washfaceImg = document.querySelector('.container-washface img');
var havebreakfastImg = document.querySelector('.container-havebreakfast img');
var watchtvImg = document.querySelector('.container-watchtv img');
var brushteethImg = document.querySelector('.container-brushteeth img');
var havedinnerImg = document.querySelector('.container-havedinner img');
var getdressedImg = document.querySelector('.container-getdressed img');
var getupImg = document.querySelector('.container-getup img');
var makethebedImg = document.querySelector('.container-makethebed img');
var gobackhomeImg = document.querySelector('.container-gobackhome img');
var gotoschoolImg = document.querySelector('.container-gotoschool img');
var dohomeworkImg = document.querySelector('.container-dohomework img');
var gotosleepImg = document.querySelector('.container-gotosleep img');
var quesdailyroutine1Img = document.querySelector('.container-quesdailyroutine1 img');
var quesdailyroutine2Img = document.querySelector('.container-quesdailyroutine2 img');


// เลือกอีเลเมนต์ของ speech box
var brushteethSpeechBox = document.querySelector('.container-brushteeth .speech-box');
var getdressedSpeechBox = document.querySelector('.container-getdressed .speech-box');
var washfaceSpeechBox = document.querySelector('.container-washface .speech-box');
var gobackhomeSpeechBox = document.querySelector('.container-gobackhome .speech-box');
var gotosleepSpeechBox = document.querySelector('.container-gotosleep .speech-box11');
var gotoschoolSpeechBox = document.querySelector('.container-gotoschool .speech-box');
var getupSpeechBox = document.querySelector('.container-getup .speech-box');
var watchtvSpeechBox = document.querySelector('.container-watchtv .speech-box');

// เลือกอีเลเมนต์ของ speech box11
var dohomeworkSpeechBox = document.querySelector('.container-dohomework .speech-box11');
var learnatschoolSpeechBox = document.querySelector('.container-learnatschool .speech-box11');

// เลือกอีเลเมนต์ของ speech box2
var makethebedSpeechBox = document.querySelector('.container-makethebed .speech-box2');
var havebreakfastSpeechBox = document.querySelector('.container-havebreakfast .speech-box2');


// เลือกอีเลเมนต์ของ speech box3
var havelunchSpeechBox = document.querySelector('.container-havelunch .speech-box3');
var havedinnerSpeechBox = document.querySelector('.container-havedinner .speech-box3');

// เลือกอีเลเมนต์ของ speech box4
var haveashowerSpeechBox = document.querySelector('.container-haveashower .speech-box4');


// เลือกอีเลเมนต์ของ speech box5



// เลือกอีเลเมนต์ของ speech box7
var quesdailyroutine1SpeechBox = document.querySelector('.container-quesdailyroutine1 .speech-box7');


// เลือกอีเลเมนต์ของ speech box8
var quesdailyroutine2SpeechBox = document.querySelector('.container-quesdailyroutine2 .speech-box8');


// ส่วนที่เพิ่มเข้ามาแบบใส่เลข
var getupNumber = document.querySelector('.container-getup .hover-number');
var makethebedNumber = document.querySelector('.container-makethebed .hover-number');
var brushteethNumber = document.querySelector('.container-brushteeth .hover-number');
var washfaceNumber = document.querySelector('.container-washface .hover-number');
var havebreakfastNumber = document.querySelector('.container-havebreakfast .hover-number');
var havedinnerNumber = document.querySelector('.container-havedinner .hover-number');
var watchtvNumber = document.querySelector('.container-watchtv .hover-number');
var gotoschoolNumber = document.querySelector('.container-gotoschool .hover-number');
var haveashowerNumber = document.querySelector('.container-haveashower .hover-number');
var getdressedNumber = document.querySelector('.container-getdressed .hover-number');

var learnatschoolNumber = document.querySelector('.container-learnatschool .hover-number');
var havelunchNumber = document.querySelector('.container-havelunch .hover-number');
var gobackhomeNumber = document.querySelector('.container-gobackhome .hover-number');
var dohomeworkNumber = document.querySelector('.container-dohomework .hover-number');
var gotosleepNumber = document.querySelector('.container-gotosleep .hover-number');



var hoverCounter = 0;
var hoveredElements = [];

// ส่วนที่เพิ่มเข้ามาแบบใส่เลข
function setupHoverEffect(imgElement, speechBox, numberElement) {
  imgElement.addEventListener('mouseover', function(event) {
    showSpeechBox(event, speechBox);
    if (!hoveredElements.includes(imgElement)) {
      hoverCounter++;
      numberElement.textContent = hoverCounter;
      numberElement.style.display = 'block';
      hoveredElements.push(imgElement);
    }
  });
}

setupHoverEffect(getupImg, getupSpeechBox, getupNumber);
setupHoverEffect(makethebedImg, makethebedSpeechBox, makethebedNumber);
setupHoverEffect(brushteethImg, brushteethSpeechBox, brushteethNumber);
setupHoverEffect(washfaceImg, washfaceSpeechBox, washfaceNumber);
setupHoverEffect(havebreakfastImg, havebreakfastSpeechBox, havebreakfastNumber);

setupHoverEffect(havedinnerImg, havedinnerSpeechBox, havedinnerNumber);
setupHoverEffect(watchtvImg, watchtvSpeechBox, watchtvNumber);

setupHoverEffect(gotoschoolImg, gotoschoolSpeechBox, gotoschoolNumber);
setupHoverEffect(haveashowerImg, haveashowerSpeechBox, haveashowerNumber);
setupHoverEffect(getdressedImg, getdressedSpeechBox, getdressedNumber);

setupHoverEffect(learnatschoolImg, learnatschoolSpeechBox, learnatschoolNumber);
setupHoverEffect(havelunchImg, havelunchSpeechBox, havelunchNumber);
setupHoverEffect(gobackhomeImg, gobackhomeSpeechBox, gobackhomeNumber);
setupHoverEffect(dohomeworkImg, dohomeworkSpeechBox, dohomeworkNumber);
setupHoverEffect(gotosleepImg, gotosleepSpeechBox, gotosleepNumber);


// ฟังก์ชันที่จะแสดง speech box เมื่อเมาส์วางที่รูปภาพ
function showSpeechBox(event, speechBox) {
  speechBox.style.display = 'block';
}

// ฟังก์ชันที่จะซ่อน speech box เมื่อเมาส์ออกจากรูปภาพ
function hideSpeechBox(event, speechBox) {
  speechBox.style.display = 'none';
}


// เพิ่ม event listener เมื่อเมาส์วางที่แต่ละรูปภาพ
havelunchImg.addEventListener('mouseover', function(event) {
  showSpeechBox(event, havelunchSpeechBox);
});

haveashowerImg.addEventListener('mouseover', function(event) {
  showSpeechBox(event, haveashowerSpeechBox);
});

washfaceImg.addEventListener('mouseover', function(event) {
    showSpeechBox(event, washfaceSpeechBox);
}); 

havebreakfastImg.addEventListener('mouseover', function(event) {
    showSpeechBox(event, havebreakfastSpeechBox);
});

watchtvImg.addEventListener('mouseover', function(event) {
    showSpeechBox(event, watchtvSpeechBox);
}); 

brushteethImg.addEventListener('mouseover', function(event) {
    showSpeechBox(event, brushteethSpeechBox);
}); 

havedinnerImg.addEventListener('mouseover', function(event) {
    showSpeechBox(event, havedinnerSpeechBox);
}); 

getdressedImg.addEventListener('mouseover', function(event) {
    showSpeechBox(event, getdressedSpeechBox);
}); 

getupImg.addEventListener('mouseover', function(event) {
    showSpeechBox(event, getupSpeechBox);
}); 

makethebedImg.addEventListener('mouseover', function(event) {
    showSpeechBox(event, makethebedSpeechBox);
}); 

gobackhomeImg.addEventListener('mouseover', function(event) {
    showSpeechBox(event, gobackhomeSpeechBox);
}); 
learnatschoolImg.addEventListener('mouseover', function(event) {
  showSpeechBox(event, learnatschoolSpeechBox);
}); 
gotoschoolImg.addEventListener('mouseover', function(event) {
  showSpeechBox(event, gotoschoolSpeechBox);
}); 

dohomeworkImg.addEventListener('mouseover', function(event) {
  showSpeechBox(event,dohomeworkSpeechBox);
}); 

gotosleepImg.addEventListener('mouseover', function(event) {
  showSpeechBox(event,gotosleepSpeechBox);
}); 

quesdailyroutine1Img.addEventListener('mouseover', function(event) {
  showSpeechBox(event, quesdailyroutine1SpeechBox);
}); 

quesdailyroutine2Img.addEventListener('mouseover', function(event) {
  showSpeechBox(event, quesdailyroutine2SpeechBox);
}); 


// เพิ่ม event listener เมื่อเมาส์ออกจากรูปภาพ
havelunchImg.addEventListener('mouseout', function(event) {
  hideSpeechBox(event, havelunchSpeechBox);
});

haveashowerImg.addEventListener('mouseout', function(event) {
  hideSpeechBox(event, haveashowerSpeechBox);
});

washfaceImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event,  washfaceSpeechBox);
  });

havebreakfastImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event, havebreakfastSpeechBox);
  });

watchtvImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event,  watchtvSpeechBox);
  });

brushteethImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event,  brushteethSpeechBox);
  });

  havedinnerImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event, havedinnerSpeechBox);
  });

  getdressedImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event, getdressedSpeechBox);
  });

  getupImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event, getupSpeechBox);
  });
  
  makethebedImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event, makethebedSpeechBox);
  });

  gobackhomeImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event,   gobackhomeSpeechBox);
  });

  learnatschoolImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event,   learnatschoolSpeechBox);
  });
  gotoschoolImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event,   gotoschoolSpeechBox);
  });

  dohomeworkImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event,   dohomeworkSpeechBox);
  });

  gotosleepImg.addEventListener('mouseout', function(event) {
    hideSpeechBox(event,   gotosleepSpeechBox);
  });

  quesdailyroutine1Img.addEventListener('mouseout', function(event) {
    hideSpeechBox(event,   quesdailyroutine1SpeechBox);
  });

  quesdailyroutine2Img.addEventListener('mouseout', function(event) {
    hideSpeechBox(event,   quesdailyroutine2SpeechBox);
  });

  

// ฟังก์ชันเล่นเสียงเมื่อโฮเวอร์ที่รูปภาพ
function playSoundWhenClick(imageSelector, soundSelector) {
  const image = document.querySelector(imageSelector);
  const sound = document.querySelector(soundSelector);

  image.addEventListener('click', () => {
    sound.play();
  });

  image.addEventListener('mouseout', () => {
    sound.pause();
    sound.currentTime = 0;
  });
}

// สร้างการเรียกใช้งานฟังก์ชันเพื่อเพิ่ม Event Listener และเล่นเสียงเมื่อโฮเวอร์ที่รูปภาพ
playSoundWhenClick('.container-havelunch img', '#havelunch');
playSoundWhenClick('.container-haveashower img', '#haveashower');
playSoundWhenClick('.container-makethebed img', '#makethebed');
playSoundWhenClick('.container-havedinner img', '#havedinner');
playSoundWhenClick('.container-washface img', '#washface');
playSoundWhenClick('.container-havebreakfast img', '#havebreakfast');
playSoundWhenClick('.container-watchtv img', '#watchtv');
playSoundWhenClick('.container-brushteeth img', '#brushteeth');
playSoundWhenClick('.container-getdressed img', '#getdressed');
playSoundWhenClick('.container-getup img', '#getup');
playSoundWhenClick('.container-gobackhome img', '#gobackhome')

playSoundWhenClick('.container-learnatschool img', '#learnatschool');
playSoundWhenClick('.container-gotoschool img', '#gotoschool');
playSoundWhenClick('.container-dohomework img', '#dohomework');
playSoundWhenClick('.container-gotosleep img', '#gotosleep');
playSoundWhenClick('.container-quesdailyroutine1 img', '#quesdailyroutine1');
playSoundWhenClick('.container-quesdailyroutine2 img', '#quesdailyroutine2');



