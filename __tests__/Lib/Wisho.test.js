import Wisho from "../../src/Lib/Wisho";

describe('Wisho', () => {
    it('should initialize Wisho via config', () => {
        var wisho = new Wisho({
            apiKey: 'apiKey',
            secretKey: 'secretKey'
        });
        expect(wisho).toBeInstanceOf(Wisho);
    });

    it('initialize Wisho via environment variables without config', () => {
        process.env['WISHO_API_KEY'] = 'apiKey';
        process.env['WISHO_SECRET_KEY'] = 'secretKey';

        var wisho = new Wisho();
        expect(wisho).toBeInstanceOf(Wisho);

        delete process.env['WISHO_API_KEY'];
        delete process.env['WISHO_SECRET_KEY'];
    });

    it('should throw exception on empty "apiKey"', function () {
        expect(() => {
            var wisho = new Wisho({
                secretKey: 'secretKey'
            });
        }).toThrow('apiKey cannot be empty');
    });

    it('should throw exception on empty "secretKey"', function () {
        expect(() => {
            var wisho = new Wisho({
                apiKey: 'apiKey'
            });
        }).toThrow('secretKey cannot be empty');
    });
});
