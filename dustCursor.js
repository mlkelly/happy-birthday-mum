// https://github.com/tholman/cursor-effects

function fairyDustCursor(wrapperEl, options) {
    var possibleColors = options && options.colors || ["#D61C59", "#E7D84B", "#1B8798"];
    var width = window.innerWidth;
    var height = window.innerHeight;
    var cursor = { x: width / 2, y: width / 2 };
    var particles = [];
    var element, canvas, context;
  
    var canvImages = [];
    const char = "*";
  
    function init(wrapperEl) {
      this.element = wrapperEl || document.body;
      canvas = document.createElement("canvas");
      context = canvas.getContext("2d");
  
      canvas.style.top = "0px";
      canvas.style.left = "0px";
      canvas.style.pointerEvents = "none";
  
      if (wrapperEl) {
        canvas.style.position = "absolute";
        wrapperEl.appendChild(canvas);
        canvas.width = wrapperEl.clientWidth;
        canvas.height = wrapperEl.clientHeight;
      } else {
        canvas.style.position = "fixed";
        document.body.appendChild(canvas);
        canvas.width = width;
        canvas.height = height;
      }
  
      context.font = "21px serif";
      context.textBaseline = "middle";
      context.textAlign = "center";
  
      possibleColors.forEach((color) => {
        let measurements = context.measureText(char);
        let bgCanvas = document.createElement("canvas");
        let bgContext = bgCanvas.getContext("2d");
  
        bgCanvas.width = measurements.width;
        bgCanvas.height =
          measurements.actualBoundingBoxAscent +
          measurements.actualBoundingBoxDescent;
  
        bgContext.fillStyle = color;
        bgContext.textAlign = "center";
        bgContext.font = "21px serif";
        bgContext.textBaseline = "middle";
        bgContext.fillText(
          char,
          bgCanvas.width / 2,
          measurements.actualBoundingBoxAscent
        );
  
        canvImages.push(bgCanvas);
      });
  
      bindEvents();
      loop();
    }
  
    // Bind events that are needed
    function bindEvents() {
      this.element.addEventListener("mousemove", onMouseMove);
      this.element.addEventListener("touchmove", onTouchMove);
      this.element.addEventListener("touchstart", onTouchMove);
      window.addEventListener("resize", onWindowResize);
    }
  
    function onWindowResize(e) {
      width = window.innerWidth;
      height = window.innerHeight;
  
      if (wrapperEl) {
        canvas.width = wrapperEl.clientWidth;
        canvas.height = wrapperEl.clientHeight;
      } else {
        canvas.width = width;
        canvas.height = height;
      }
  
    }
  
    function onTouchMove(e) {
      if (e.touches.length > 0) {
        for (var i = 0; i < e.touches.length; i++) {
          addParticle(
            e.touches[i].clientX,
            e.touches[i].clientY,
            canvImages[Math.floor(Math.random() * canvImages.length)]
          );
        }
      }
    }
  
    function onMouseMove(e) {
      if (wrapperEl) {
        const boundingRect = wrapperEl.getBoundingClientRect();
        cursor.x = e.clientX - boundingRect.left;
        cursor.y = e.clientY - boundingRect.top;
      } else {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
      }
  
      addParticle(
        cursor.x,
        cursor.y,
        canvImages[Math.floor(Math.random() * possibleColors.length)]
      );
    }
  
    function addParticle(x, y, color) {
      particles.push(new Particle(x, y, color));
    }
  
    function updateParticles() {
      context.clearRect(0, 0, width, height);
  
      // Update
      for (var i = 0; i < particles.length; i++) {
        particles[i].update(context);
      }
  
      // Remove dead particles
      for (var i = particles.length - 1; i >= 0; i--) {
        if (particles[i].lifeSpan < 0) {
          particles.splice(i, 1);
        }
      }
    }
  
    function loop() {
      updateParticles();
      requestAnimationFrame(loop);
    }
  
  
    function Particle(x, y, canvasItem) {
      const lifeSpan = Math.floor(Math.random() * 30 + 60);
      this.initialLifeSpan = lifeSpan; //
      this.lifeSpan = lifeSpan; //ms
      this.velocity = {
        x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
        y: Math.random() * 0.7 + 0.9,
      };
      this.position = { x: x, y: y };
      this.canv = canvasItem;
  
      this.update = function (context) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.lifeSpan--;
  
        this.velocity.y += 0.02;
  
        const scale = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
  
        context.drawImage(
          this.canv,
          this.position.x - (this.canv.width / 2) * scale,
          this.position.y - this.canv.height / 2,
          this.canv.width * scale,
          this.canv.height * scale
        );
      };
    }
  
    init(wrapperEl);
}

fairyDustCursor()

  