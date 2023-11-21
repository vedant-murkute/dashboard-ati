import React, { useEffect, useState } from "react";
import { fetchData } from "../services";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  CardMedia,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { companiesAtom } from "../atoms";
import companyLogo from "../assets/enterprise.png"

import "./styles.css"

export const CompanyList = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [companies, setCompanies] = useRecoilState(companiesAtom);

  useEffect(() => {
    fetchData("getAllCompanies")
      .then((resp) => {
        setCompanies(resp);
        setList(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (query) {
      const action = "getQueryCompany";
      fetchData(action, { company: query })
        .then((resp) => {
          setList([resp]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setList(companies);
    }
  }, [query]);

  return (
    <div className="list-container">
      <TextField
        sx={{ width: "100%", marginBottom: '30px' }}
        label="Enter company id"
        variant="outlined"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></TextField>
      <div className="list">
        {list &&
          list.map((company, index) => (
            <Card
              sx={{ width:'30%', margin:'30px 0' }}
              key={company.id || index}
              variant="outlined"
            >
              <CardMedia
                sx={{ height: 0, paddingTop: '56.25%', marginTop:'30' }}
                image={companyLogo}
                title="company logo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {company.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`Address: ${company.address}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`Industry: ${company.industry}`}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};
