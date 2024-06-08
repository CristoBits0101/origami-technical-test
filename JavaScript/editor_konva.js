document.addEventListener("DOMContentLoaded", () => {
  const stage = new Konva.Stage({
    container: "konva-holder",
    width: 595,
    height: 842,
  });

  const layer = new Konva.Layer();
  stage.add(layer);

  const addTextButton = document.getElementById("addText");
  if (addTextButton) {
    addTextButton.addEventListener("click", () => {
      const textNode = new Konva.Text({
        text: "Sample Text",
        x: 50,
        y: 80,
        draggable: true,
        fontSize: 20,
        fontFamily: "Calibri",
        fill: "black",
        fontWeight: "normal", // Cambiado de fontStyle a fontWeight
      });

      textNode.on("dblclick", () => {
        textNode.fontWeight(
          textNode.fontWeight() === "bold" ? "normal" : "bold"
        ); // Cambiado de fontStyle a fontWeight
        layer.draw();
      });

      layer.add(textNode);
      layer.draw();
    });
  } else {
    console.error("Elemento con ID 'addText' no encontrado.");
  }

  const downloadPDFButton = document.getElementById("downloadPDF");
  if (downloadPDFButton) {
    downloadPDFButton.addEventListener("click", () => {
      const dataURL = stage.toDataURL();
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "page.pdf";
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
