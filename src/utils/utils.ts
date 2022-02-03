export class UTILS {

    static capitalize([first, ...rest]) {
        return first.toUpperCase() + rest.join('').toLowerCase();
    }

}