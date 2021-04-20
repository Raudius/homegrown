/**
 * An environment defines the state and scope of the program.
 *
 * Environments are hierarchical: every environment has a parent. A child can
 * access the assigns of a parent (but not vice versa).
 * The root environment is created before the program is run, and can contain
 * pre-defined functions and values.
 */
class Environment {
    /**
     * @param {Environment} parent
     */
    constructor(parent=null) {
        this.parent = parent;
        this.assigns = {};
    }

    /**
     * Assigns a value to this environment.
     * This will shadow any previous assigns with the same key
     * on parent environments
     *
     * @param key
     * @param value
     */
    assign(key, value) {
        this.assigns[key] = value;
    }

    /**
     * Fetches a variable from the environment.
     *
     * @param {String} key
     * @returns {Promise<Response>|null|*}
     */
    fetch(key) {
        if (this.hasAssign(key)) {
            return this.assigns[key];
        }

        if (this.parent) {
            return this.parent.fetch(key);
        }

        return null;
    }

    /**
     * Returns whether the key has an assign in this environment.
     *
     * @param {String} key
     * @returns {boolean}
     */
    hasAssign(key) {
        return this.assigns.hasOwnProperty(key);
    }
}

module.exports = {
    Environment
}