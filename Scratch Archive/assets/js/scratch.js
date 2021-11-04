var canvas = document.getElementById("canvas"); //캔버스 불러오기

function resizeCanvas() {
  canvas.style.width = window.innerWidth + "px";
  setTimeout(function() {
    canvas.style.height = window.innerHeight + "px";
  }, 0);
};

window.onresize = resizeCanvas; //캔버스의 크기가 변경될 경우 resizeCanvas 함수 호출하기
resizeCanvas(); //일부 엔진에서는 onresize가 페이지가 불러오면서 실행되지 않는데, 이를 위해 직접 호출

var url = new URL(window.location.href);
var version = url.searchParams.get("version");
var scratch_url = "";

switch(version) {
    case "0.1.0":
        scratch_url = `${window.location.origin}/assets/img/0.1.0.image`;
		break;
	case "0.2.0":
        scratch_url = `${window.location.origin}/assets/img/0.2.0.image`;
		break;
	case "0.3.0":
        scratch_url = `${window.location.origin}/assets/img/0.3.0.image`;
		break;
	case "0.4.0":
        scratch_url = `${window.location.origin}/assets/img/0.4.0.image`;
		break;
	case "0.5.0":
        scratch_url = `${window.location.origin}/assets/img/0.5.0.image`;
		break;
	case "0.6.0":
        scratch_url = `${window.location.origin}/assets/img/0.6.0.image`;
		break;
	case "1.0.0":
        scratch_url = `${window.location.origin}/assets/img/1.0.0.image`;
		break;
	case "1.0.1":
        scratch_url = `${window.location.origin}/assets/img/1.0.1.image`;
		break;
	case "1.0.2":
        scratch_url = `${window.location.origin}/assets/img/1.0.2.image`;
		break;
	case "1.1.0":
        scratch_url = `${window.location.origin}/assets/img/1.1.0.image`;
		break;
	case "1.2.0":
        scratch_url = `${window.location.origin}/assets/img/1.2.0.image`;
		break;
	case "1.2.1":
        scratch_url = `${window.location.origin}/assets/img/1.2.1.image`;
		break;
	case "1.3.0":
        scratch_url = `${window.location.origin}/assets/img/1.3.0.image`;
		break;
	case "1.3.1":
        scratch_url = `${window.location.origin}/assets/img/1.3.1.image`;
		break;
	case "1.4.0":
        scratch_url = `${window.location.origin}/assets/img/1.4.0.image`;
		break;
	case "ex3.4.0":
        scratch_url = `${window.location.origin}/assets/img/ex3.4.0.image`;
		break;
}

console.log(`Image file url: ${scratch_url}`);
console.log(`Scratch version: ${version}`);

SqueakJS.runSqueak(scratch_url, canvas, { fullscreen: true, spinner: spinner }); //SqueakJS 실행하기