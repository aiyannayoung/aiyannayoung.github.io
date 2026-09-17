$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(800, 620, 200, 20,"lightpink");
createPlatform(700, 170, 100, 30, "purple");
createPlatform(500, 300, 200, 30, "white")
createPlatform(800, 400, 200, 30, "yellow")
createPlatform(500,500, 200, 30, "hotpink")
createPlatform(70, 600, 100, 30, "blue") 

    // TODO 3 - Create Collectables
createCollectable("steve", 720, 120, 0.5, 0.7);
createCollectable("diamond", 300, 170, 0.5, 0.4);
createCollectable("max", 750, 280, 0, 0);


    
    // TODO 4 - Create Cannons
createCannon("top", 400, 1000);
createCannon("right", 200, 2000);
createCannon("right", 430, 1300)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
