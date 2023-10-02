import React, { useState, useEffect } from "react";
import "tw-elements";
import { Link } from "react-router-dom";
import { Dialog, Transition, Combobox } from "@headlessui/react";
import { Fragment } from "react";
import Button from "../../ui/button/Button";
import "tw-elements";
import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const nominees = [1, 2, 3, 2, 4, 4, 4, 3, 3, 6, 7, 4, 2, 3, 2, 3, 2, 3];

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const countries = [
  {
    name: "Afghanistan",
    dialCode: "+93",
    isoCode: "AF",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/af.svg",
  },
  {
    name: "Aland Islands",
    dialCode: "+358",
    isoCode: "AX",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ax.svg",
  },
  {
    name: "Albania",
    dialCode: "+355",
    isoCode: "AL",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/al.svg",
  },
  {
    name: "Algeria",
    dialCode: "+213",
    isoCode: "DZ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/dz.svg",
  },
  {
    name: "American Samoa",
    dialCode: "+1684",
    isoCode: "AS",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/as.svg",
  },
  {
    name: "Andorra",
    dialCode: "+376",
    isoCode: "AD",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ad.svg",
  },
  {
    name: "Angola",
    dialCode: "+244",
    isoCode: "AO",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ao.svg",
  },
  {
    name: "Anguilla",
    dialCode: "+1264",
    isoCode: "AI",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ai.svg",
  },
  {
    name: "Antarctica",
    dialCode: "+672",
    isoCode: "AQ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/aq.svg",
  },
  {
    name: "Antigua and Barbuda",
    dialCode: "+1268",
    isoCode: "AG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ag.svg",
  },
  {
    name: "Argentina",
    dialCode: "+54",
    isoCode: "AR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ar.svg",
  },
  {
    name: "Armenia",
    dialCode: "+374",
    isoCode: "AM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/am.svg",
  },
  {
    name: "Aruba",
    dialCode: "+297",
    isoCode: "AW",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/aw.svg",
  },
  {
    name: "Ascension Island",
    dialCode: "+247",
    isoCode: "AC",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ac.svg",
  },
  {
    name: "Australia",
    dialCode: "+61",
    isoCode: "AU",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/au.svg",
  },
  {
    name: "Austria",
    dialCode: "+43",
    isoCode: "AT",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/at.svg",
  },
  {
    name: "Azerbaijan",
    dialCode: "+994",
    isoCode: "AZ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/az.svg",
  },
  {
    name: "Bahamas",
    dialCode: "+1242",
    isoCode: "BS",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bs.svg",
  },
  {
    name: "Bahrain",
    dialCode: "+973",
    isoCode: "BH",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bh.svg",
  },
  {
    name: "Bangladesh",
    dialCode: "+880",
    isoCode: "BD",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bd.svg",
  },
  {
    name: "Barbados",
    dialCode: "+1246",
    isoCode: "BB",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bb.svg",
  },
  {
    name: "Belarus",
    dialCode: "+375",
    isoCode: "BY",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/by.svg",
  },
  {
    name: "Belgium",
    dialCode: "+32",
    isoCode: "BE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/be.svg",
  },
  {
    name: "Belize",
    dialCode: "+501",
    isoCode: "BZ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bz.svg",
  },
  {
    name: "Benin",
    dialCode: "+229",
    isoCode: "BJ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bj.svg",
  },
  {
    name: "Bermuda",
    dialCode: "+1441",
    isoCode: "BM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bm.svg",
  },
  {
    name: "Bhutan",
    dialCode: "+975",
    isoCode: "BT",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bt.svg",
  },
  {
    name: "Bolivia",
    dialCode: "+591",
    isoCode: "BO",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bo.svg",
  },
  {
    name: "Bosnia and Herzegovina",
    dialCode: "+387",
    isoCode: "BA",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ba.svg",
  },
  {
    name: "Botswana",
    dialCode: "+267",
    isoCode: "BW",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bw.svg",
  },
  {
    name: "Brazil",
    dialCode: "+55",
    isoCode: "BR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/br.svg",
  },
  {
    name: "British Indian Ocean Territory",
    dialCode: "+246",
    isoCode: "IO",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/io.svg",
  },
  {
    name: "Brunei Darussalam",
    dialCode: "+673",
    isoCode: "BN",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bn.svg",
  },
  {
    name: "Bulgaria",
    dialCode: "+359",
    isoCode: "BG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bg.svg",
  },
  {
    name: "Burkina Faso",
    dialCode: "+226",
    isoCode: "BF",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bf.svg",
  },
  {
    name: "Burundi",
    dialCode: "+257",
    isoCode: "BI",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bi.svg",
  },
  {
    name: "Cambodia",
    dialCode: "+855",
    isoCode: "KH",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/kh.svg",
  },
  {
    name: "Cameroon",
    dialCode: "+237",
    isoCode: "CM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cm.svg",
  },
  {
    name: "Canada",
    dialCode: "+1",
    isoCode: "CA",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ca.svg",
  },
  {
    name: "Cape Verde",
    dialCode: "+238",
    isoCode: "CV",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cv.svg",
  },
  {
    name: "Cayman Islands",
    dialCode: "+1345",
    isoCode: "KY",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ky.svg",
  },
  {
    name: "Central African Republic",
    dialCode: "+236",
    isoCode: "CF",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cf.svg",
  },
  {
    name: "Chad",
    dialCode: "+235",
    isoCode: "TD",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/td.svg",
  },
  {
    name: "Chile",
    dialCode: "+56",
    isoCode: "CL",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cl.svg",
  },
  {
    name: "China",
    dialCode: "+86",
    isoCode: "CN",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cn.svg",
  },
  {
    name: "Christmas Island",
    dialCode: "+61",
    isoCode: "CX",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cx.svg",
  },
  {
    name: "Cocos (Keeling) Islands",
    dialCode: "+61",
    isoCode: "CC",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cc.svg",
  },
  {
    name: "Colombia",
    dialCode: "+57",
    isoCode: "CO",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/co.svg",
  },
  {
    name: "Comoros",
    dialCode: "+269",
    isoCode: "KM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/km.svg",
  },
  {
    name: "Congo",
    dialCode: "+242",
    isoCode: "CG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cg.svg",
  },
  {
    name: "Cook Islands",
    dialCode: "+682",
    isoCode: "CK",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ck.svg",
  },
  {
    name: "Costa Rica",
    dialCode: "+506",
    isoCode: "CR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cr.svg",
  },
  {
    name: "Croatia",
    dialCode: "+385",
    isoCode: "HR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/hr.svg",
  },
  {
    name: "Cuba",
    dialCode: "+53",
    isoCode: "CU",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cu.svg",
  },
  {
    name: "Cyprus",
    dialCode: "+357",
    isoCode: "CY",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cy.svg",
  },
  {
    name: "Czech Republic",
    dialCode: "+420",
    isoCode: "CZ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cz.svg",
  },
  {
    name: "Democratic Republic of the Congo",
    dialCode: "+243",
    isoCode: "CD",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/cd.svg",
  },
  {
    name: "Denmark",
    dialCode: "+45",
    isoCode: "DK",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/dk.svg",
  },
  {
    name: "Djibouti",
    dialCode: "+253",
    isoCode: "DJ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/dj.svg",
  },
  {
    name: "Dominica",
    dialCode: "+1767",
    isoCode: "DM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/dm.svg",
  },
  {
    name: "Dominican Republic",
    dialCode: "+1849",
    isoCode: "DO",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/do.svg",
  },
  {
    name: "Ecuador",
    dialCode: "+593",
    isoCode: "EC",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ec.svg",
  },
  {
    name: "Egypt",
    dialCode: "+20",
    isoCode: "EG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/eg.svg",
  },
  {
    name: "El Salvador",
    dialCode: "+503",
    isoCode: "SV",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sv.svg",
  },
  {
    name: "Equatorial Guinea",
    dialCode: "+240",
    isoCode: "GQ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gq.svg",
  },
  {
    name: "Eritrea",
    dialCode: "+291",
    isoCode: "ER",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/er.svg",
  },
  {
    name: "Estonia",
    dialCode: "+372",
    isoCode: "EE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ee.svg",
  },
  {
    name: "Eswatini",
    dialCode: "+268",
    isoCode: "SZ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sz.svg",
  },
  {
    name: "Ethiopia",
    dialCode: "+251",
    isoCode: "ET",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/et.svg",
  },
  {
    name: "Falkland Islands (Malvinas)",
    dialCode: "+500",
    isoCode: "FK",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/fk.svg",
  },
  {
    name: "Faroe Islands",
    dialCode: "+298",
    isoCode: "FO",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/fo.svg",
  },
  {
    name: "Fiji",
    dialCode: "+679",
    isoCode: "FJ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/fj.svg",
  },
  {
    name: "Finland",
    dialCode: "+358",
    isoCode: "FI",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/fi.svg",
  },
  {
    name: "France",
    dialCode: "+33",
    isoCode: "FR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/fr.svg",
  },
  {
    name: "French Guiana",
    dialCode: "+594",
    isoCode: "GF",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gf.svg",
  },
  {
    name: "French Polynesia",
    dialCode: "+689",
    isoCode: "PF",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/pf.svg",
  },
  {
    name: "Gabon",
    dialCode: "+241",
    isoCode: "GA",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ga.svg",
  },
  {
    name: "Gambia",
    dialCode: "+220",
    isoCode: "GM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gm.svg",
  },
  {
    name: "Georgia",
    dialCode: "+995",
    isoCode: "GE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ge.svg",
  },
  {
    name: "Germany",
    dialCode: "+49",
    isoCode: "DE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/de.svg",
  },
  {
    name: "Ghana",
    dialCode: "+233",
    isoCode: "GH",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gh.svg",
  },
  {
    name: "Gibraltar",
    dialCode: "+350",
    isoCode: "GI",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gi.svg",
  },
  {
    name: "Greece",
    dialCode: "+30",
    isoCode: "GR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gr.svg",
  },
  {
    name: "Greenland",
    dialCode: "+299",
    isoCode: "GL",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gl.svg",
  },
  {
    name: "Grenada",
    dialCode: "+1473",
    isoCode: "GD",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gd.svg",
  },
  {
    name: "Guadeloupe",
    dialCode: "+590",
    isoCode: "GP",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gp.svg",
  },
  {
    name: "Guam",
    dialCode: "+1671",
    isoCode: "GU",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gu.svg",
  },
  {
    name: "Guatemala",
    dialCode: "+502",
    isoCode: "GT",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gt.svg",
  },
  {
    name: "Guernsey",
    dialCode: "+44-1481",
    isoCode: "GG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gg.svg",
  },
  {
    name: "Guinea",
    dialCode: "+224",
    isoCode: "GN",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gn.svg",
  },
  {
    name: "Guinea-Bissau",
    dialCode: "+245",
    isoCode: "GW",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gw.svg",
  },
  {
    name: "Guyana",
    dialCode: "+592",
    isoCode: "GY",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gy.svg",
  },
  {
    name: "Haiti",
    dialCode: "+509",
    isoCode: "HT",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ht.svg",
  },
  {
    name: "Holy See (Vatican City State)",
    dialCode: "+379",
    isoCode: "VA",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/va.svg",
  },
  {
    name: "Honduras",
    dialCode: "+504",
    isoCode: "HN",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/hn.svg",
  },
  {
    name: "Hong Kong",
    dialCode: "+852",
    isoCode: "HK",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/hk.svg",
  },
  {
    name: "Hungary",
    dialCode: "+36",
    isoCode: "HU",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/hu.svg",
  },
  {
    name: "Iceland",
    dialCode: "+354",
    isoCode: "IS",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/is.svg",
  },
  {
    name: "India",
    dialCode: "+91",
    isoCode: "IN",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/in.svg",
  },
  {
    name: "Indonesia",
    dialCode: "+62",
    isoCode: "ID",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/id.svg",
  },
  {
    name: "Iran",
    dialCode: "+98",
    isoCode: "IR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ir.svg",
  },
  {
    name: "Iraq",
    dialCode: "+964",
    isoCode: "IQ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/iq.svg",
  },
  {
    name: "Ireland",
    dialCode: "+353",
    isoCode: "IE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ie.svg",
  },
  {
    name: "Isle of Man",
    dialCode: "+44-1624",
    isoCode: "IM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/im.svg",
  },
  {
    name: "Israel",
    dialCode: "+972",
    isoCode: "IL",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/il.svg",
  },
  {
    name: "Italy",
    dialCode: "+39",
    isoCode: "IT",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/it.svg",
  },
  {
    name: "Ivory Coast / Cote d'Ivoire",
    dialCode: "+225",
    isoCode: "CI",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ci.svg",
  },
  {
    name: "Jamaica",
    dialCode: "+1876",
    isoCode: "JM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/jm.svg",
  },
  {
    name: "Japan",
    dialCode: "+81",
    isoCode: "JP",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/jp.svg",
  },
  {
    name: "Jersey",
    dialCode: "+44-1534",
    isoCode: "JE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/je.svg",
  },
  {
    name: "Jordan",
    dialCode: "+962",
    isoCode: "JO",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/jo.svg",
  },
  {
    name: "Kazakhstan",
    dialCode: "+77",
    isoCode: "KZ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/kz.svg",
  },
  {
    name: "Kenya",
    dialCode: "+254",
    isoCode: "KE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ke.svg",
  },
  {
    name: "Kiribati",
    dialCode: "+686",
    isoCode: "KI",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ki.svg",
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    dialCode: "+850",
    isoCode: "KP",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/kp.svg",
  },
  {
    name: "Korea, Republic of South Korea",
    dialCode: "+82",
    isoCode: "KR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/kr.svg",
  },
  {
    name: "Kosovo",
    dialCode: "+383",
    isoCode: "XK",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/xk.svg",
  },
  {
    name: "Kuwait",
    dialCode: "+965",
    isoCode: "KW",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/kw.svg",
  },
  {
    name: "Kyrgyzstan",
    dialCode: "+996",
    isoCode: "KG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/kg.svg",
  },
  {
    name: "Laos",
    dialCode: "+856",
    isoCode: "LA",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/la.svg",
  },
  {
    name: "Latvia",
    dialCode: "+371",
    isoCode: "LV",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/lv.svg",
  },
  {
    name: "Lebanon",
    dialCode: "+961",
    isoCode: "LB",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/lb.svg",
  },
  {
    name: "Lesotho",
    dialCode: "+266",
    isoCode: "LS",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ls.svg",
  },
  {
    name: "Liberia",
    dialCode: "+231",
    isoCode: "LR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/lr.svg",
  },
  {
    name: "Libya",
    dialCode: "+218",
    isoCode: "LY",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ly.svg",
  },
  {
    name: "Liechtenstein",
    dialCode: "+423",
    isoCode: "LI",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/li.svg",
  },
  {
    name: "Lithuania",
    dialCode: "+370",
    isoCode: "LT",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/lt.svg",
  },
  {
    name: "Luxembourg",
    dialCode: "+352",
    isoCode: "LU",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/lu.svg",
  },
  {
    name: "Macau",
    dialCode: "+853",
    isoCode: "MO",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mo.svg",
  },
  {
    name: "Madagascar",
    dialCode: "+261",
    isoCode: "MG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mg.svg",
  },
  {
    name: "Malawi",
    dialCode: "+265",
    isoCode: "MW",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mw.svg",
  },
  {
    name: "Malaysia",
    dialCode: "+60",
    isoCode: "MY",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/my.svg",
  },
  {
    name: "Maldives",
    dialCode: "+960",
    isoCode: "MV",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mv.svg",
  },
  {
    name: "Mali",
    dialCode: "+223",
    isoCode: "ML",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ml.svg",
  },
  {
    name: "Malta",
    dialCode: "+356",
    isoCode: "MT",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mt.svg",
  },
  {
    name: "Marshall Islands",
    dialCode: "+692",
    isoCode: "MH",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mh.svg",
  },
  {
    name: "Martinique",
    dialCode: "+596",
    isoCode: "MQ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mq.svg",
  },
  {
    name: "Mauritania",
    dialCode: "+222",
    isoCode: "MR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mr.svg",
  },
  {
    name: "Mauritius",
    dialCode: "+230",
    isoCode: "MU",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mu.svg",
  },
  {
    name: "Mayotte",
    dialCode: "+262",
    isoCode: "YT",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/yt.svg",
  },
  {
    name: "Mexico",
    dialCode: "+52",
    isoCode: "MX",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mx.svg",
  },
  {
    name: "Micronesia, Federated States of Micronesia",
    dialCode: "+691",
    isoCode: "FM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/fm.svg",
  },
  {
    name: "Moldova",
    dialCode: "+373",
    isoCode: "MD",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/md.svg",
  },
  {
    name: "Monaco",
    dialCode: "+377",
    isoCode: "MC",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mc.svg",
  },
  {
    name: "Mongolia",
    dialCode: "+976",
    isoCode: "MN",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mn.svg",
  },
  {
    name: "Montenegro",
    dialCode: "+382",
    isoCode: "ME",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/me.svg",
  },
  {
    name: "Montserrat",
    dialCode: "+1664",
    isoCode: "MS",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ms.svg",
  },
  {
    name: "Morocco",
    dialCode: "+212",
    isoCode: "MA",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ma.svg",
  },
  {
    name: "Mozambique",
    dialCode: "+258",
    isoCode: "MZ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mz.svg",
  },
  {
    name: "Myanmar",
    dialCode: "+95",
    isoCode: "MM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mm.svg",
  },
  {
    name: "Namibia",
    dialCode: "+264",
    isoCode: "NA",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/na.svg",
  },
  {
    name: "Nauru",
    dialCode: "+674",
    isoCode: "NR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/nr.svg",
  },
  {
    name: "Nepal",
    dialCode: "+977",
    isoCode: "NP",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/np.svg",
  },
  {
    name: "Netherlands",
    dialCode: "+31",
    isoCode: "NL",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/nl.svg",
  },
  {
    name: "Netherlands Antilles",
    dialCode: "+599",
    isoCode: "AN",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/an.svg",
  },
  {
    name: "New Caledonia",
    dialCode: "+687",
    isoCode: "NC",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/nc.svg",
  },
  {
    name: "New Zealand",
    dialCode: "+64",
    isoCode: "NZ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/nz.svg",
  },
  {
    name: "Nicaragua",
    dialCode: "+505",
    isoCode: "NI",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ni.svg",
  },
  {
    name: "Niger",
    dialCode: "+227",
    isoCode: "NE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ne.svg",
  },
  {
    name: "Nigeria",
    dialCode: "+234",
    isoCode: "NG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ng.svg",
  },
  {
    name: "Niue",
    dialCode: "+683",
    isoCode: "NU",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/nu.svg",
  },
  {
    name: "Norfolk Island",
    dialCode: "+672",
    isoCode: "NF",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/nf.svg",
  },
  {
    name: "North Macedonia",
    dialCode: "+389",
    isoCode: "MK",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mk.svg",
  },
  {
    name: "Northern Mariana Islands",
    dialCode: "+1670",
    isoCode: "MP",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mp.svg",
  },
  {
    name: "Norway",
    dialCode: "+47",
    isoCode: "NO",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/no.svg",
  },
  {
    name: "Oman",
    dialCode: "+968",
    isoCode: "OM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/om.svg",
  },
  {
    name: "Pakistan",
    dialCode: "+92",
    isoCode: "PK",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/pk.svg",
  },
  {
    name: "Palau",
    dialCode: "+680",
    isoCode: "PW",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/pw.svg",
  },
  {
    name: "Palestine",
    dialCode: "+970",
    isoCode: "PS",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ps.svg",
  },
  {
    name: "Panama",
    dialCode: "+507",
    isoCode: "PA",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/pa.svg",
  },
  {
    name: "Papua New Guinea",
    dialCode: "+675",
    isoCode: "PG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/pg.svg",
  },
  {
    name: "Paraguay",
    dialCode: "+595",
    isoCode: "PY",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/py.svg",
  },
  {
    name: "Peru",
    dialCode: "+51",
    isoCode: "PE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/pe.svg",
  },
  {
    name: "Philippines",
    dialCode: "+63",
    isoCode: "PH",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ph.svg",
  },
  {
    name: "Pitcairn",
    dialCode: "+872",
    isoCode: "PN",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/pn.svg",
  },
  {
    name: "Poland",
    dialCode: "+48",
    isoCode: "PL",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/pl.svg",
  },
  {
    name: "Portugal",
    dialCode: "+351",
    isoCode: "PT",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/pt.svg",
  },
  {
    name: "Puerto Rico",
    dialCode: "+1939",
    isoCode: "PR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/pr.svg",
  },
  {
    name: "Qatar",
    dialCode: "+974",
    isoCode: "QA",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/qa.svg",
  },
  {
    name: "Reunion",
    dialCode: "+262",
    isoCode: "RE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/re.svg",
  },
  {
    name: "Romania",
    dialCode: "+40",
    isoCode: "RO",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ro.svg",
  },
  {
    name: "Russia",
    dialCode: "+7",
    isoCode: "RU",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ru.svg",
  },
  {
    name: "Rwanda",
    dialCode: "+250",
    isoCode: "RW",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/rw.svg",
  },
  {
    name: "Saint Barthelemy",
    dialCode: "+590",
    isoCode: "BL",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/bl.svg",
  },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dialCode: "+290",
    isoCode: "SH",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sh.svg",
  },
  {
    name: "Saint Kitts and Nevis",
    dialCode: "+1869",
    isoCode: "KN",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/kn.svg",
  },
  {
    name: "Saint Lucia",
    dialCode: "+1758",
    isoCode: "LC",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/lc.svg",
  },
  {
    name: "Saint Martin",
    dialCode: "+590",
    isoCode: "MF",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/mf.svg",
  },
  {
    name: "Saint Pierre and Miquelon",
    dialCode: "+508",
    isoCode: "PM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/pm.svg",
  },
  {
    name: "Saint Vincent and the Grenadines",
    dialCode: "+1784",
    isoCode: "VC",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/vc.svg",
  },
  {
    name: "Samoa",
    dialCode: "+685",
    isoCode: "WS",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ws.svg",
  },
  {
    name: "San Marino",
    dialCode: "+378",
    isoCode: "SM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sm.svg",
  },
  {
    name: "Sao Tome and Principe",
    dialCode: "+239",
    isoCode: "ST",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/st.svg",
  },
  {
    name: "Saudi Arabia",
    dialCode: "+966",
    isoCode: "SA",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sa.svg",
  },
  {
    name: "Senegal",
    dialCode: "+221",
    isoCode: "SN",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sn.svg",
  },
  {
    name: "Serbia",
    dialCode: "+381",
    isoCode: "RS",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/rs.svg",
  },
  {
    name: "Seychelles",
    dialCode: "+248",
    isoCode: "SC",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sc.svg",
  },
  {
    name: "Sierra Leone",
    dialCode: "+232",
    isoCode: "SL",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sl.svg",
  },
  {
    name: "Singapore",
    dialCode: "+65",
    isoCode: "SG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sg.svg",
  },
  {
    name: "Sint Maarten",
    dialCode: "+1721",
    isoCode: "SX",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sx.svg",
  },
  {
    name: "Slovakia",
    dialCode: "+421",
    isoCode: "SK",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sk.svg",
  },
  {
    name: "Slovenia",
    dialCode: "+386",
    isoCode: "SI",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/si.svg",
  },
  {
    name: "Solomon Islands",
    dialCode: "+677",
    isoCode: "SB",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sb.svg",
  },
  {
    name: "Somalia",
    dialCode: "+252",
    isoCode: "SO",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/so.svg",
  },
  {
    name: "South Africa",
    dialCode: "+27",
    isoCode: "ZA",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/za.svg",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    dialCode: "+500",
    isoCode: "GS",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gs.svg",
  },
  {
    name: "South Sudan",
    dialCode: "+211",
    isoCode: "SS",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ss.svg",
  },
  {
    name: "Spain",
    dialCode: "+34",
    isoCode: "ES",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/es.svg",
  },
  {
    name: "Sri Lanka",
    dialCode: "+94",
    isoCode: "LK",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/lk.svg",
  },
  {
    name: "Sudan",
    dialCode: "+249",
    isoCode: "SD",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sd.svg",
  },
  {
    name: "Suriname",
    dialCode: "+597",
    isoCode: "SR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sr.svg",
  },
  {
    name: "Svalbard and Jan Mayen",
    dialCode: "+47",
    isoCode: "SJ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sj.svg",
  },
  {
    name: "Sweden",
    dialCode: "+46",
    isoCode: "SE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/se.svg",
  },
  {
    name: "Switzerland",
    dialCode: "+41",
    isoCode: "CH",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ch.svg",
  },
  {
    name: "Syrian Arab Republic",
    dialCode: "+963",
    isoCode: "SY",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/sy.svg",
  },
  {
    name: "Taiwan",
    dialCode: "+886",
    isoCode: "TW",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/tw.svg",
  },
  {
    name: "Tajikistan",
    dialCode: "+992",
    isoCode: "TJ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/tj.svg",
  },
  {
    name: "Tanzania, United Republic of Tanzania",
    dialCode: "+255",
    isoCode: "TZ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/tz.svg",
  },
  {
    name: "Thailand",
    dialCode: "+66",
    isoCode: "TH",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/th.svg",
  },
  {
    name: "Timor-Leste",
    dialCode: "+670",
    isoCode: "TL",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/tl.svg",
  },
  {
    name: "Togo",
    dialCode: "+228",
    isoCode: "TG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/tg.svg",
  },
  {
    name: "Tokelau",
    dialCode: "+690",
    isoCode: "TK",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/tk.svg",
  },
  {
    name: "Tonga",
    dialCode: "+676",
    isoCode: "TO",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/to.svg",
  },
  {
    name: "Trinidad and Tobago",
    dialCode: "+1868",
    isoCode: "TT",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/tt.svg",
  },
  {
    name: "Tunisia",
    dialCode: "+216",
    isoCode: "TN",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/tn.svg",
  },
  {
    name: "Turkey",
    dialCode: "+90",
    isoCode: "TR",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/tr.svg",
  },
  {
    name: "Turkmenistan",
    dialCode: "+993",
    isoCode: "TM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/tm.svg",
  },
  {
    name: "Turks and Caicos Islands",
    dialCode: "+1649",
    isoCode: "TC",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/tc.svg",
  },
  {
    name: "Tuvalu",
    dialCode: "+688",
    isoCode: "TV",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/tv.svg",
  },
  {
    name: "Uganda",
    dialCode: "+256",
    isoCode: "UG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ug.svg",
  },
  {
    name: "Ukraine",
    dialCode: "+380",
    isoCode: "UA",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ua.svg",
  },
  {
    name: "United Arab Emirates",
    dialCode: "+971",
    isoCode: "AE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ae.svg",
  },
  {
    name: "United Kingdom",
    dialCode: "+44",
    isoCode: "GB",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/gb.svg",
  },
  {
    name: "United States",
    dialCode: "+1",
    isoCode: "US",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/us.svg",
  },
  {
    name: "United States Minor Outlying Islands",
    dialCode: "+246",
    isoCode: "UMI",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/umi.svg",
  },
  {
    name: "Uruguay",
    dialCode: "+598",
    isoCode: "UY",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/uy.svg",
  },
  {
    name: "Uzbekistan",
    dialCode: "+998",
    isoCode: "UZ",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/uz.svg",
  },
  {
    name: "Vanuatu",
    dialCode: "+678",
    isoCode: "VU",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/vu.svg",
  },
  {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    dialCode: "+58",
    isoCode: "VE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ve.svg",
  },
  {
    name: "Vietnam",
    dialCode: "+84",
    isoCode: "VN",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/vn.svg",
  },
  {
    name: "Virgin Islands, British",
    dialCode: "+1284",
    isoCode: "VG",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/vg.svg",
  },
  {
    name: "Virgin Islands, U.S.",
    dialCode: "+1340",
    isoCode: "VI",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/vi.svg",
  },
  {
    name: "Wallis and Futuna",
    dialCode: "+681",
    isoCode: "WF",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/wf.svg",
  },
  {
    name: "Yemen",
    dialCode: "+967",
    isoCode: "YE",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/ye.svg",
  },
  {
    name: "Zambia",
    dialCode: "+260",
    isoCode: "ZM",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/zm.svg",
  },
  {
    name: "Zimbabwe",
    dialCode: "+263",
    isoCode: "ZW",
    flag: "https://cdn.kcak11.com/CountryFlags/countries/zw.svg",
  },
];

function Index() {
  let token = sessionStorage.getItem("token");
  let { id } = useParams();
  let [isOpen, setIsOpen] = useState(false);
  let [confirmModalOpen, setConfirmModalOpen] = useState(false);
  let [isDNomineeOpen, setIsDNomineeOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [OTPRequested, setOTPRequested] = useState(false);
  const [OTPRequestedAgain, setOTPRequestedAgain] = useState(false);
  const [otp, setOtp] = useState("");
  const [voted, setVoted] = useState(false);
  const [votedNom, setVotedNom] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNominee, setSelectedNominee] = useState();
  const [signedIn, setSignedIn] = useState(false);
  const [phone, setPhone] = useState("+960");

  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  React.useEffect(() => {
    if (token != null) {
      Axios.get(`${process.env.REACT_APP_API_URL}/website/nominees/${id}`, {
        headers: {
          api_key: process.env.REACT_APP_API_KEY,
          api_secret: process.env.REACT_APP_API_SECRET,
          "x-access-token": token,
        },
      }).then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setPageData(res.data);
          setVoted(res.data.voted);
          setSignedIn(res.data.signedIn);
          setVotedNom(res.data.voted_nominee);
          setLoading(false);
        } else {
          setLoading(true);
        }
      });
    } else {
      Axios.get(`${process.env.REACT_APP_API_URL}/website/nominees/${id}`, {
        headers: {
          api_key: process.env.REACT_APP_API_KEY,
          api_secret: process.env.REACT_APP_API_SECRET,
        },
      }).then((res) => {
        if (res.status === 200) {
          setPageData(res.data);
          setVoted(res.data.voted);
          setVotedNom(res.data.voted_nominee);
          setSignedIn(res.data.signedIn);
          setLoading(false);
        } else {
          setLoading(true);
        }
      });
    }
  }, [voted]);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    phone: "",
  };

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .min(5)
      .matches(phoneRegExp, "Phone number is not valid"),
  });

  // Send OTP
  function sendOTP(phone) {
    const data = {
      phone: phone,
    };

    function getToken() {
      if (token != null) {
        return {
          "x-access-token": token,
        };
      } else {
        return null;
      }
    }
    console.log(data);

    Axios.post(`${process.env.REACT_APP_API_URL}/website/send-otp`, data, {
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        api_secret: process.env.REACT_APP_API_SECRET,
      },
    }).then((res) => {
      if (res.status === 200) {
        setOTPRequested(true);
      } else {
      }
    });
  }

  function OTPInsertHandler() {
    const data = {
      phone: phone,
      otp: otp,
    };

    Axios.post(`${process.env.REACT_APP_API_URL}/website/login`, data, {
      headers: {
        api_key: process.env.REACT_APP_API_KEY,
        api_secret: process.env.REACT_APP_API_SECRET,
      },
    }).then((res) => {
      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.token);
        setSignedIn(true);
        closeModal();
      } else {
      }
    });
  }

  async function voteHandler() {
    let data;
    console.log(pageData.business);

    if (pageData.business) {
      data = {
        nomineeId: selectedNominee.id,
        fob_nomineeId: 1,
      };
    } else {
      data = {
        nomineeId: 1,
        fobNomineeId: selectedNominee.id,
      };
    }

    console.log(data);

    Axios.post(
      `${process.env.REACT_APP_API_URL}/website/vote/${pageData.category_id}`,
      data,
      {
        headers: {
          api_key: process.env.REACT_APP_API_KEY,
          api_secret: process.env.REACT_APP_API_SECRET,
          "x-access-token": token,
        },
      }
    ).then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log(res);
        setVoted(true);
        closeModal();
      } else {
        console.log(res);
      }
    });
  }

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    setPhone(selectedCountryCode + values.phone);
    sendOTP(selectedCountryCode + values.phone);
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  function closeModal() {
    setIsOpen(false);
    setIsDNomineeOpen(false);
    setConfirmModalOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function openConfirmModal(nom) {
    setSelectedNominee(nom);
    setConfirmModalOpen(true);
  }

  async function categorySelect(cat) {
    setShowMenu(false);
    setSelectedCategory(cat);
  }

  function handleModal(nom) {
    setIsDNomineeOpen(true);
    setSelectedNominee(nom);
  }

  const [selectedCountryCode, setSelectedCountryCode] = useState();

  function renderComboBox() {
    return (
      <select
        value={selectedCountryCode}
        onChange={(e) => setSelectedCountryCode(e.target.value)}
        className="w-3/6 p-2.5 rounded-l-xl border border-gray"
      >
        {countries.map((country, i) => (
          <option value={country.dialCode}>
            <div className="w-4 h-4 bg-primary" /> {country.name} -
            {country.dialCode}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div className=" w-full h-fit flex items-center justify-center flex-col ">
      <div
        className="flex max-w-7xl flex-col justify-start items-start  mt-24"
        data-aos="fade-up"
      >
        {/* Category Image */}

        <div className=" w-full flex flex-col justify-center text-center items-center space-y-10 p-10">
          <h1 className="text-4xl max-w-[75vw] lg:max-w-[45vw] text-center lg:text-5xl font-bold  text-white ">
            {pageData.category_name}
          </h1>
          {/* number of nominees */}
          <div className="flex flex-col justify-center items-center space-y-5">
            <h1 className="text-sm text-center lg:text-md   text-white ">
              {pageData?.data?.length}{" "}
              {pageData?.data?.length > 1 ? "Nominees" : "Nominee"}
            </h1>
          </div>
          <Link
            className=""
            to={!pageData.fob ? "/nominees/general" : "/nominees/fob"}
          >
            <Button title="Go Back" />
          </Link>

          {signedIn && (
            <p className="w-full bg-lightprimary p-2 rounded-2xl text-gray text-xs lg:text-sm">
              You are signed in! Please Vote the desired Nominee.
            </p>
          )}
        </div>
      </div>
      {voted && (
        <>
          {/* Show who the person voted */}
          <div
            data-aos="fade-up"
            className=" max-w-5xl p-5 lg:p-10 bg-black/20 mb-5 w-10/12 lg:w-full rounded-xl grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-10"
          >
            <div className="lg:col-span-7 col-span-1">
              <div class="overflow-hidden w-full  justify-center  lg:col-span-5  bg-white">
                {votedNom && (
                  <div className="grid grid-cols-1">
                    <img
                      src={votedNom?.imageURI}
                      className="bg-purple-200 h-40 w-40 lg:h-[300px] lg:w-[350px] rounded-lg  hover:scale-110 transition-all duration-500"
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-1 lg:col-span-5 flex flex-col items-start justify-start">
              <h1 className="text-secondary text-xs lg:text-2xl font-light mb-1">
                Thank you for voting{" "}
              </h1>
              <h4 className="font-bold text-xl lg:text-4xl text-primary mb-5 leading-tight">
                <>{votedNom?.name}</>
              </h4>
            </div>
          </div>
        </>
      )}

      {pageData?.data && (
        <div
          className={`bg-black/20 w-full ${
            pageData.data.length >= 1
              ? "min-h-[calc(100vh-300px)]"
              : "min-h-screen"
          }  flex py-10 items-start justify-center`}
        >
          {loading && (
            <div className="flex justify-center items-center w-full mt-40 h-[60vh]">
              <div
                className="flex justify-center items-center pt-40"
                role="status"
              >
                <svg
                  aria-hidden="true"
                  class="mr-2 w-20 h-20 text-lightPrimary/20 animate-spin dark:text-gray-600 fill-primary"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {!loading && (
            <div
              data-aos="fade-up"
              className={`grid px-10 w-fit ${
                pageData.data.length < 4
                  ? `grid-cols-1   md:grid-cols-${pageData.data.length}`
                  : ` grid-cols-1 lg:grid-cols-4`
              } max-w-7xl gap-6`}
            >
              {pageData?.data?.map(
                (nom) =>
                  (
                    <div
                      className={`flex rounded-2xl min-w-[280px] max-w-[300px] bg-black/20 backdrop-blur-xl border border-lightgray shadow-md h-fit   ${
                        votedNom === nom
                          ? "dropshadow-md rounded-2xl"
                          : "rounded-2xl"
                      } `}
                    >
                      <div className=" w-full   gap-4">
                        <div class="overflow-hidden w-full rounded-t-2xl min-h-fit   flex items-start justify-center  lg:col-span-5  bg-white">
                          {!pageData.business && (
                            <img
                              src={nom.imageURI}
                              className="bg-purple-200 object-cover  w-full h-[200px]  rounded-t-2xl   transition-all duration-500"
                              alt=""
                            />
                          )}
                          {pageData.business && (
                            <img
                              src={nom.business_imageURI}
                              className="bg-purple-200 object-contain  w-full h-[250px] rounded-t-2xl  hover:scale-110 transition-all duration-500"
                              alt=""
                            />
                          )}
                        </div>
                        <div className="flex p-5 space-y-2 items-center justify-center flex-col w-full">
                          <div className="h-[100px]">
                            <h1 className="text-base text-center lg:text-xl font-medium text-white">
                              {pageData.business && <>{nom.business_names}</>}
                              {!pageData.business && <>{nom.name}</>}
                            </h1>

                            {!pageData.business && (
                              <h5 className="my-1.5 lg:my-2 text-center text-xs lg:text-sm text-primary mb-1">
                                {nom.business_name}
                              </h5>
                            )}
                          </div>

                          <div className=" w-full flex items-center justify-center flex-col">
                            <button
                              onClick={() => handleModal(nom)}
                              className="rounded-full  p-1.5 px-4 text-xs mt-1 text-primary hover:text-white/20"
                            >
                              View More
                            </button>
                            {!voted && (
                              <>
                                <div
                                  className="w-full mt-4"
                                  onClick={() =>
                                    signedIn
                                      ? openConfirmModal(nom)
                                      : setIsOpen(true)
                                  }
                                >
                                  <button
                                    onClick={() => console.log(nom)}
                                    disabled={!voted}
                                    // if disabled, show a message saying you have already voted

                                    className="w-full text-white uppercase bg-gradient-to-t from-secondary to-black/20 hover:bg-gradient-to-b border  text-xs md:text-sm  font-medium bg-gray/20 px-2 p-1.5 rounded-full hover:brightness-110 "
                                  >
                                    Vote now
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) ?? (
                    <div className="flex justify-center items-center w-full mt-40 h-[60vh]">
                      <div
                        className="flex justify-center items-center pt-40"
                        role="status"
                      >
                        <p> no</p>
                      </div>
                    </div>
                  )
              )}
            </div>
          )}

          {/* Sign up Modal */}
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>

              <div className="fixed  inset-0 overflow-hidden">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full mt-20 max-w-md bg-cover bg-right transform overflow-hidden rounded-2xl bg-white p-6 text-left flex justify-center items-center flex-col align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h1"
                        className="text-base md:text-xl text-center text-secondary font-semibold leading-6 text-gray-900"
                      >
                        You are required to sign in to vote
                      </Dialog.Title>
                      {!OTPRequested && (
                        <>
                          <div className="mt-2">
                            <p className="text-primary text-xs md:text-sm">
                              Please enter your phone number
                            </p>
                          </div>
                          <div className="my-4 mt-4 w-full">
                            <FormikProvider value={formik}>
                              <div>
                                <Form className="flex justify-center items-center w-full flex-col">
                                  <div className="flex items-center justify-center flex-col gap-y-2 w-4/4 text-center">
                                    <div className="flex flex-row items-center w-full ">
                                      {renderComboBox()}
                                      <Field
                                        name="phone"
                                        type="text"
                                        className="w-1/2 p-2 border border-gray outline-none  text-center  tracking-wider form-control focus:border-primary focus:ring-lime rounded-r-lg  shadow-sm"
                                      />
                                    </div>
                                    <ErrorMessage
                                      name="phone"
                                      component="div"
                                      className="text-primary text-xs"
                                    />
                                  </div>

                                  <div className="mt-4 w-1/2">
                                    <button
                                      type="submit"
                                      className="w-full text-white uppercase hover:bg-gradient-to-b border-2  text-xs md:text-sm  font-medium bg-primary px-2 p-1.5 rounded-full hover:brightness-110 "
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </Form>
                              </div>
                            </FormikProvider>
                          </div>
                        </>
                      )}
                      {OTPRequested && phone && (
                        <>
                          <div className="mt-2 flex items-center justify-center">
                            <p className="text-gray text-center text-xs md:text-sm w-4/5">
                              A 6-digit OTP has been sent to {phone} Please
                              Enter the OTP.
                            </p>
                          </div>
                          <input
                            onChange={(e) => setOtp(e.target.value)}
                            className="p-2 mt-3 px-4 text-xl border w-1/3 text-center border-primary rounded-md"
                          ></input>

                          <div className=" mt-2"></div>
                          <a
                            onClick={() => sendOTP(phone)}
                            className="mt-1 cursor-pointer flex items-center justify-center text-primary text-center text-xs md:text-sm w-4/5"
                          >
                            <p className="">I did not recieve an SMS</p>
                          </a>

                          <div
                            onClick={() => OTPInsertHandler()}
                            className="mt-4"
                          >
                            <button
                              type="button"
                              className="w-full text-white uppercase hover:bg-gradient-to-b border-2  text-xs md:text-sm  font-medium bg-primary px-2 p-1.5 rounded-full hover:brightness-110 "
                            >
                              Confirm
                            </button>
                          </div>
                        </>
                      )}
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          {/* Descriptive nominee modal */}
          <Transition appear show={isDNomineeOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>

              <div className="fixed inset-6 overflow-hidden">
                <div className="flex min-h-full items-center justify-center  text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full mt-20  max-w-6xl max-h-min lg:max-h-[80vh] overflow-hidden bg-cover bg-right transform rounded-2xl bg-white p-2 text-left flex justify-center items-center flex-col align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h1"
                        className="text-lg md:text-xl grid grid-cols-1 gap-y-0 lg:gap-y-4 p-3  text-center text-secondary font-semibold leading-6 text-gray-900"
                      >
                        <div className="flex w-full justify-end items-end">
                          <svg
                            onClick={() => closeModal()}
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4  text-gray cursor-pointer hover:text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        {selectedNominee && (
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 space-x-0 lg:space-x-14">
                            <div className="flex justify-center items-center">
                              {!pageData.business && (
                                <img
                                  className="h-[25vh] lg:h-[50vh] max-w[20vw]"
                                  src={selectedNominee.imageURI}
                                />
                              )}
                              {pageData.business && (
                                <img
                                  className="h-[20vh] lg:h-[50vh] max-w[20vw]"
                                  src={selectedNominee.business_imageURI}
                                />
                              )}
                            </div>
                            <div className="p-5 flex flex-col justify-center items-center space-y-1 lg:space-y-4 max-w-3xl">
                              {" "}
                              {/* Boat name or persons name */}
                              <h1>
                                <>
                                  {!pageData.business && (
                                    <>{selectedNominee.name}</>
                                  )}

                                  {pageData.business && (
                                    <>{selectedNominee.business_names}</>
                                  )}
                                </>
                              </h1>
                              {/* Business Name */}
                              <h3 className="text-sm text-primary font-light">
                                {" "}
                                <>
                                  {!pageData.business && (
                                    <>{selectedNominee.business_name}</>
                                  )}
                                  {pageData.fob && (
                                    <>{setSelectedNominee.name}</>
                                  )}
                                </>
                              </h3>
                              {/* Address info */}
                              {pageData.business && (
                                <div className="flex items-center justify-center">
                                  <div className="grid grid-cols-12 mb-6 font-normal text-xs lg:text-sm text-start gap-y-3 mt-4 overflow-hidden">
                                    <div className="grid grid-cols-1 col-span-2 lg:col-span-3  text-primary ">
                                      <h4>Address:</h4>
                                    </div>
                                    <div className="grid grid-cols-1 col-span-10 pl-2  lg:col-span-9">
                                      <h4>
                                        {selectedNominee.address}
                                        {selectedNominee.address_street}
                                        {
                                          selectedNominee.address_atoll_island
                                        }{" "}
                                      </h4>
                                    </div>
                                    <div className="grid grid-cols-1 col-span-2 lg:col-span-3  text-primary ">
                                      <h4>Email:</h4>
                                    </div>
                                    <div className="grid grid-cols-1 col-span-10 pl-2  lg:col-span-9">
                                      <h4>{selectedNominee.address_email}</h4>
                                    </div>
                                    <div className="grid grid-cols-1 col-span-2 lg:col-span-3  text-primary ">
                                      <h4>Phone:</h4>
                                    </div>
                                    <div className="grid grid-cols-1 col-span-10 pl-2  lg:col-span-9">
                                      <h4>
                                        {selectedNominee.address_telephone}
                                      </h4>
                                    </div>
                                    <div className="grid grid-cols-1 col-span-2 lg:col-span-3  text-primary ">
                                      <h4>Website:</h4>
                                    </div>
                                    <div className="grid grid-cols-1 col-span-10 pl-2  lg:col-span-9">
                                      <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={selectedNominee.address_url}
                                        className="focus:ring-0 focus:outline-none"
                                      >
                                        {selectedNominee.address_url}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {/* Address info */}
                              {!pageData.business && !pageData.fob && (
                                <div className="flex items-center justify-center">
                                  <div className="grid grid-cols-12 mb-6 font-normal text-xs lg:text-sm text-start gap-y-3 mt-4 overflow-hidden">
                                    <div className="grid grid-cols-1 col-span-2 lg:col-span-3  text-primary ">
                                      <h4>Website:</h4>
                                    </div>
                                    <div className="grid grid-cols-1 col-span-10 pl-2  lg:col-span-9">
                                      <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={selectedNominee.url}
                                        className="focus:ring-0 focus:outline-none"
                                      >
                                        {selectedNominee.url}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {/* Address info */}
                              {pageData.fob && (
                                <div className="flex text-xs space-x-3 font-normal items-center justify-center">
                                  <div className="grid grid-cols-1   text-primary ">
                                    <h4>ID Card Number:</h4>
                                  </div>

                                  <a className="focus:ring-0 focus:outline-none">
                                    {selectedNominee.idNum}
                                  </a>
                                </div>
                              )}
                              {/* Description */}
                              <div className="  h-[20vh] lg:h-[38vh] overflow-y-auto  ">
                                <p
                                  style={{ lineHeight: 1.7 }}
                                  className=" text-xs lg:text-sm mb-4 font-light"
                                >
                                  {!pageData.business && (
                                    <>{parse(selectedNominee.description)}</>
                                  )}

                                  {pageData.business && (
                                    <>
                                      {parse(
                                        selectedNominee.business_description
                                      )}
                                    </>
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </Dialog.Title>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          {/* Confirm Vote Modal */}
          <Transition appear show={confirmModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-hidden">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full  max-w-lg max-h-[1200px] overflow-scroll bg-cover bg-right transform rounded-2xl bg-white p-6 text-left flex justify-center items-center flex-col align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h1"
                        className="text-lg md:text-xl grid grid-cols-1 gap-y-4  text-center text-secondary font-semibold leading-6 text-gray-900"
                      >
                        <h1 className="text">Voting Confirmation</h1>
                        {selectedNominee && (
                          <p className="text-sm font-normal">
                            {pageData.business && (
                              <>
                                Are you sure you want to vote for{" "}
                                {selectedNominee.business_names} as the{" "}
                                {pageData.category_name}?{" "}
                              </>
                            )}
                            {!pageData.business && (
                              <>
                                Are you sure you want to vote for{" "}
                                {selectedNominee.name} as the{" "}
                                {pageData.category_name}?{" "}
                              </>
                            )}
                          </p>
                        )}
                        <p className="text-xs font-normal text-primary">
                          You will not be able to change the vote casted
                          afterwards
                        </p>
                        <div className="grid grid-cols-2 gap-x-4 text-sm font-medium">
                          <button
                            onClick={() => closeModal()}
                            className="p-1.5 rounded-full w-full px-4 border border-primary text-primary hover:bg-lightPrimary"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => voteHandler()}
                            className="w-full text-white uppercase hover:bg-gradient-to-b border-2  text-xs md:text-sm  font-medium bg-primary px-2 p-1.5 rounded-full hover:brightness-110 "
                          >
                            Confirm
                          </button>
                        </div>
                      </Dialog.Title>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      )}
    </div>
  );
}

export default Index;
