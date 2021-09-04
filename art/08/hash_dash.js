const token = "BinhkqYUPnzDSPkwDyT1LNqPBMScNGKd7SPzbEXgdUmd";

/* C.Penz 2021 - Hash and Dash */

const signature =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAA0CAYAAACtp1uWAAAEsWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEyOSIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjUyIgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iMTI5IgogICB0aWZmOkltYWdlTGVuZ3RoPSI1MiIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iNzIuMCIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIuMCIKICAgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIKICAgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0w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";

const ALL_COLORS = [
  // sparkles
  createCols(
    "https://coolors.co/fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a"
  ),
  createCols(
    "https://coolors.co/f72585-b5179e-7209b7-560bad-480ca8-3a0ca3-3f37c9-4361ee-4895ef-4cc9f0"
  ),
  createCols(
    "https://coolors.co/f2d7ee-d3bcc0-a5668b-69306d-0e103d-3d0066-5c0099-c86bfa-fdc500-ffd500"
  ),
  createCols(
    "https://coolors.co/ffcbf2-f3c4fb-ecbcfd-e5b3fe-e2afff-deaaff-d8bbff-d0d1ff-c8e7ff-c0fdff"
  ),
  createCols(
    "https://coolors.co/ffedd8-f3d5b5-e7bc91-d4a276-bc8a5f-a47148-8b5e34-6f4518-603808-583101"
  ),

  // base colors
  createCols(
    "https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff-fb5607-ff006e-8338ec-fb5607-ff006e"
  ),
  createCols(
    "https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-a1ff0a-0aff99-0aefff-147df5-580aff-be0aff"
  ),
  createCols(
    "https://coolors.co/ff0000-ff8700-ffd300-deff0a-a1ff0a-0aff99-0aefff-147df5-580aff-be0aff"
  ),
  createCols(
    "https://coolors.co/ff0000-ff8700-ffd300-deff0a-a1ff0a-0aff99-0aefff-147df5-580aff-be0aff"
  ),
  createCols(
    "https://coolors.co/ff0000-ff8700-ffd300-deff0a-a1ff0a-0aff99-0aefff-147df5-580aff-be0aff"
  ),
];

var sign;
var coreSize = 1800;
var SEED = 0;

hashCode = function (s) {
  return s.split("").reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};

function preload() {
  sign = loadImage(signature);
}

function unhexColor(color) {
  let a = color.substring(1, 3);
  let b = unhex(a);
  let result = {
    r: unhex(color.substring(1, 3)),
    g: unhex(color.substring(3, 5)),
    b: unhex(color.substring(5)),
  };
  return result;
}

function colorWithAlpha(color_struct, aAlpha) {
  let result =
    "rgba(" +
    color_struct.r +
    "," +
    color_struct.g +
    "," +
    color_struct.b +
    "," +
    aAlpha +
    ")";
  return result;
}

function setup() {
  SEED = hashCode(token);
  randomSeed(SEED);
  createCanvas(coreSize * 1, coreSize * 1, P2D);
  background(250, 250, 250);
  noLoop();
}

function keyPressed() {
  if (keyCode == ENTER) {
    save("hash_dash_" + token + ".png");
  }
}

function draw() {
  paletteColor = int(randomGaussian(7, 1));
  if (paletteColor > 9) paletteColor = 9;
  if (paletteColor < 5) paletteColor = 5;

  drawingContext.setLineDash([100, 20]);
  for (i = 0; i < randomGaussian(1000, 100); i++) {
    strokeWeight(randomGaussian(0.4, 2));
    stroke(
      colorWithAlpha(
        unhexColor(ALL_COLORS[paletteColor][int(random(0, 9))]),
        random(0, 10) / 10
      )
    );
    stroke(255, 255, 255);
    fill(
      colorWithAlpha(
        unhexColor(ALL_COLORS[paletteColor][int(random(0, 9))]),
        randomGaussian(1, 0.8)
      )
    );
    beginShape();
    vertex(
      randomGaussian(width / 2, width / 4),
      randomGaussian(height / 2, height / 4)
    );
    for (xx = 0; xx < 4; xx++)
      bezierVertex(
        randomGaussian(width / 2, width / 4),
        randomGaussian(height / 2, height / 4),
        randomGaussian(width / 2, width / 4),
        randomGaussian(height / 2, height / 4),
        randomGaussian(width / 2, width / 4),
        randomGaussian(height / 2, height / 4)
      );
    endShape();
  }

  drawingContext.setLineDash([0, 0]);

  stroke(10, 10, 10);
  strokeWeight(10 + random(0, 4));
  fill(0, 0, 0, 0);

  strokeWeight(0.4 + random(0, 2) / 100);
  var lastX = random(1, 100);
  var lastY = random(1, 100);
  let angle = randomGaussian(0, 0.02);
  rotate(angle);

  let randomX = random(20, 40);
  let randomY = random(20, 10);

  paletteColor = int(randomGaussian(7, 1));
  if (paletteColor > 9) paletteColor = 9;
  if (paletteColor < 5) paletteColor = 5;

  for (
    x = 0;
    x < coreSize * 0.1;
    x = x + random(randomX) // 20
  )
    for (
      y = 0;
      y < coreSize * 0.1;
      y = y + random(randomY) // 12
    ) {
      let variance = random(10, 30);
      let variance_x = 10 - random(0, 19);
      let c = colorWithAlpha(
        unhexColor(ALL_COLORS[paletteColor][int(random(0, 9))]),
        random(0, 10) / 10
      );
      stroke(c);
      strokeWeight(0.4 + random(0, 20) / 3);
      var newX = 10 * x + 10 * variance_x;
      var newY = 10 * y + variance;
      line(lastX, lastY, newX, newY);
      lastX = newX;
      lastY = newY;
    }

  rotate(-angle);

  strokeWeight(300 * (coreSize / 2200));
  stroke(250, 250, 250);
  rect(0, 0, width, height);

  strokeWeight(0);

  paletteColor = int(randomGaussian(2, 1));
  if (paletteColor > 4) paletteColor = 4;
  if (paletteColor < 0) paletteColor = 0;

  var maxSpec = randomGaussian(1000, 500);
  for (i = 0; i < maxSpec; i++) {
    let angle = random(0, 2) / 50 - 1 / 5;

    let randomX = random(0, width);
    let randomY = random(0, height);

    fill(
      colorWithAlpha(
        unhexColor(ALL_COLORS[paletteColor][int(random(0, 9))]),
        random(0, 10) / 10
      )
    );

    var base = randomGaussian(5, 2);

    var radiusX = random(base);
    var radiusY = radiusX + randomGaussian(0, base / 10);
    ellipse(randomX, randomY, radiusX, radiusY);

    radiusX = random(base);
    radiusY = radiusX + randomGaussian(0, base / 10);
    ellipse(randomX + random(100), randomY, radiusX, radiusY);

    radiusX = random(base);
    radiusY = radiusX + randomGaussian(0, base / 10);
    ellipse(randomX, randomY + random(100), radiusX, radiusY);

    radiusX = random(base);
    radiusY = radiusX + randomGaussian(0, base / 10);
    ellipse(randomX + random(100), randomY + random(100), radiusX, radiusY);
  }

  loadPixels();
  for (let i = 0; i < pixels.length; i++) {
    pixels[i] = pixels[i] + randomGaussian(0, 20);
  }
  updatePixels();

  image(sign, width - 160 + random(10) - 5, height - 80 + random(10) - 5);

}

function createCols(_url) {
  let slash_index = _url.lastIndexOf("/");
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split("-");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = "#" + arr[i];
  }
  return arr;
}
