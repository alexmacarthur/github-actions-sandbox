import { taxationIs } from "./index";

it('returns the truth', () => {
    expect(taxationIs()).toEqual("theft");
});
