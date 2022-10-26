var Account = /** @class */ (function () {
    function Account(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    Account.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error('Invalid Amount');
        }
        this._balance += amount;
    };
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
var account = new Account(1, 'far', 0);
account.deposit(5000);
console.log(account.balance);
console.log(account instanceof Account);
