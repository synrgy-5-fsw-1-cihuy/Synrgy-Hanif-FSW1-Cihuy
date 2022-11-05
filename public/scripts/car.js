class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <div class="card" style="width: 333px; height: 586px; margin: auto;">
        <img src="${this.image}" class="card-img-top" alt="car" style="max-height: 200px;">
        <div class="card-body">
          <h5 class="card-title">${this.manufacture} ${this.model}</h5>
          <p class="card-text"><b>Rp ${this.rentPerDay} / hari</b></p>
          <p class="card-text">${this.description}</p>
          <p class="card-text"><i class="fas fa-users" style="opacity: 65%;"></i>&nbsp;&nbsp;${this.capacity} Orang</p>
          <p class="card-text"><i class="fa fa-gear" style="opacity: 65%;"></i>&nbsp;&nbsp;${this.transmission}</p>
          <p class="card-text"><i class="fa fa-calendar-o" style="opacity: 65%;"></i>&nbsp;&nbsp;${this.year}</p>
          <button class="btn btn-banner btn-block" style="width: 300px; position: absolute; bottom: 20px;">Pilih Mobil</button>
        </div>
      </div>
    `;
  }
}
