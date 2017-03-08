AFRAME.registerComponent('automove-controls', {
    init: function () {
        this.speed = 0.2;
        this.isMoving = true;
        this.velocityDelta = new THREE.Vector3();
    },
    isVelocityActive: function () {
        return this.isMoving;
    },
    getVelocityDelta: function () {
        this.velocityDelta.z = this.isMoving ? -this.speed : 0;
        return this.velocityDelta.clone();
    }
});
