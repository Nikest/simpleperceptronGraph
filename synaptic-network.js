const { Layer, Network, Trainer } = synaptic;

let perceptron = null;
let trainer = null;

function buildNetwork(hidden) {
    const inputLayer = new Layer(2);
    const hiddenLayer = new Layer(hidden);
    const outputLayer = new Layer(1);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    perceptron = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });

    trainer = new Trainer(perceptron);
}
