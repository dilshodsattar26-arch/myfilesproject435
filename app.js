const coreControllerInstance = {
    version: "1.0.435",
    registry: [944, 1718, 379, 1250, 1497, 1299, 787, 1196],
    init: function() {
        const nodes = this.registry.filter(x => x > 351);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreControllerInstance.init();
});