<template>
  <div>
    <p>size_x</p>
    <input type="text" id="size" name="size" v-model="size_x" />
    <p>size_y</p>
    <input type="text" id="size" name="size" v-model="size_y" />
    <p>instructions</p>
    <input
      type="text"
      id="instructions"
      name="instructions"
      v-model="instructions"
    />
    <p>land_position_x</p>
    <input
      type="text"
      id="land_position_x"
      name="land_position_x"
      v-model="land_position_x"
    />
    <p>land_position_y</p>
    <input
      type="text"
      id="land_position_y"
      name="land_position_y"
      v-model="land_position_y"
    />
    <p>orientation</p>
    <input
      type="text"
      id="orientation"
      name="orientation"
      v-model="land_position_orientation"
    />
    <br />
    <button type="submit" v-on:click="getResult">getResult</button>
    <p>current_x: {{ current_x }}</p>
    <p>current_y: {{ current_y }}</p>
    <p>orientation: {{ current_orientation }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size_x: "",
      size_y: "",
      instructions: "",
      land_position_x: "",
      land_position_y: "",
      land_position_orientation: "",
      current_x: "",
      current_y: "",
      current_orientation: "",
    };
  },
  methods: {
    getResult(e) {
      e.preventDefault();
      this.current_x = parseInt(this.land_position_x);
      this.current_y = parseInt(this.land_position_y);
      this.current_orientation = this.land_position_orientation;
      const arrayInstrunctions = this.instructions.split("");
      arrayInstrunctions.forEach((instruction) => {
        switch (instruction) {
          case "M":
            switch (this.current_orientation) {
              case "N":
                this.current_y += 1;
                break;
              case "S":
                this.current_y -= 1;
                break;
              case "E":
                this.current_x += 1;
                break;
              case "W":
                this.current_x -= 1;
                break;
            }
            break;
          case "L":
            switch (this.current_orientation) {
              case "N":
                this.current_orientation = "W";
                break;
              case "S":
                this.current_orientation = "E";
                break;
              case "E":
                this.current_orientation = "N";
                break;
              case "W":
                this.current_orientation = "S";
                break;
            }
            break;
          case "R":
            switch (this.current_orientation) {
              case "N":
                this.current_orientation = "E";
                break;
              case "S":
                this.current_orientation = "W";
                break;
              case "E":
                this.current_orientation = "S";
                break;
              case "W":
                this.current_orientation = "N";
                break;
            }
            break;
          default:
            break;
        }
      });
    },
  },
};
</script>
