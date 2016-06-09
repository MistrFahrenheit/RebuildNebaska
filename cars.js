var Car = function() {
this.horsepower = null;
this.currentSpeed = 0;
this.isRunning = false;

this.start = function() {this.isRunning = true;};
this.gas = function() {
    if(this.isRunning){
      this.currentSpeed = this.currentSpeed + this.horsepower/100;
    }
};
this.brake = function() {
    if(this.currentSpeed > 0){this.currentSpeed--;}
};
};