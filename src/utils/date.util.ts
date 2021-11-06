export class DateUtil {

  static getCurrentDate() {
    return new Date();
  }

  static addDaysSkippingWeekends(numberDaysToAdd: number) {
    let endDate = new Date();
    const dateFrom = new Date();
    let count = 0;
    while (count < numberDaysToAdd) {
      endDate = new Date(dateFrom.setDate(dateFrom.getDate() + 1));
      if (endDate.getDay() != 0 && endDate.getDay() != 6) {
        count++;
      }
    }
    return endDate.toLocaleDateString("es-CO");
  }
}