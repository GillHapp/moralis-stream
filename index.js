const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const MORALIS_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjJmYzdmMWM0LWVmMTQtNGZhNS1hN2U1LTU5MTg5ZmFlYjFjYyIsIm9yZ0lkIjoiMzg0MjkxIiwidXNlcklkIjoiMzk0ODU5IiwidHlwZSI6IlBST0pFQ1QiLCJ0eXBlSWQiOiIxOWJmZTY3Ni0wNGE5LTQyYTUtYmEzOS00MWM5OTlhOWJlNTQiLCJpYXQiOjE3MjM0NDQwMDMsImV4cCI6NDg3OTIwNDAwM30.yBI0iiFcVEqcZGJtgpdiV41c3d0-YJrTJHv-KarSOnY";
const address = "0x0ae6352e1C411aE52B64e9F702244eC9bF6e44Ac";

Moralis.start({
    apiKey: MORALIS_API_KEY
})

async function streams() {
    const options = {
        chains: [EvmChain.BSC_TESTNET],
        description: "listen to function call",
        tag: "function call",
        includeContractLogs: false,
        includeNativeTxs: true,
        webhookUrl: " https://b20b-2401-4900-80b5-4e8-bca2-8c2a-aff0-510a.ngrok-free.app/webhook"
    }

    try {
        const newStream = await Moralis.Streams.add(options);
        const { id } = newStream.toJSON();

        await Moralis.Streams.addAddress({ address, id });
        console.log("Stream is created successfully", address, id);
    } catch (error) {
        console.error("Error creating stream:", error);
    }
}

streams();