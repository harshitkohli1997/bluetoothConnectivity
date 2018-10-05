const bluetooth = require('node-bluetooth');

const device = new bluetooth.DeviceINQ();

device.listPairedDevices(console.log);