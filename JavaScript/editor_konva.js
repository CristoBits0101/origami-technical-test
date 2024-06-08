document.addEventListener("DOMContentLoaded", () => {
  const stage = new Konva.Stage({
    container: "konva-holder",
    width: 595,
    height: 842,
  });

  const layer = new Konva.Layer();
  stage.add(layer);

  const addTextButton = document.getElementById("addText");
  const textInput = document.getElementById("textInput");
  const fontWeightSelect = document.getElementById("fontWeightSelect");

  if (addTextButton && textInput && fontWeightSelect) {
    addTextButton.addEventListener("click", () => {
      const text = textInput.value;
      const fontWeight = fontWeightSelect.value;
      if (text.trim() !== "") {
        const textNode = new Konva.Text({
          text: text,
          x: 50,
          y: 80,
          draggable: true,
          fontSize: 20,
          fontFamily: "Calibri",
          fill: "black",
          fontWeight: fontWeight,
        });
        layer.add(textNode);
        layer.draw();
      }
    });
  } else {
    console.error(
      "Elementos con IDs 'addText', 'textInput' o 'fontWeightSelect' no encontrados."
    );
  }

  const downloadPDFButton = document.getElementById("downloadPDF");
  if (downloadPDFButton) {
    downloadPDFButton.addEventListener("click", () => {
      const pdfCanvas = document.createElement("canvas");
      pdfCanvas.width = stage.width();
      pdfCanvas.height = stage.height();
      layer.draw();
      const dataURL = pdfCanvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "konva_canvas.pdf";
      link.click();
    });
  } else {
    console.error("Elemento con ID 'downloadPDF' no encontrado.");
  }

  const downloadJSONButton = document.getElementById("downloadJSON");
  if (downloadJSONButton) {
    downloadJSONButton.addEventListener("click", () => {
      const json = stage.toJSON();
      const link = document.createElement("a");
      link.href = "data:text/json;charset=utf-8," + encodeURIComponent(json);
      link.download = "page.json";
      link.click();
    });
  } else {
    console.error("Elemento con ID 'downloadJSON' no encontrado.");
  }
});
