"use client";

import { registerUser } from "@/lib/firebase/firebase.service";
import { Button, Form, Input, message } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";

type UserDataTypes = {
  userName: string;
  email: string;
  password: string;
};

export const FormSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  const onSubmit = async (userData: UserDataTypes) => {
    setLoading(true);
    try {
      const { email, userName, password } = userData;
      await registerUser({ email, userName, password, role: "user" });

      router.push("/");
      console.log("User registered successfully!");
      messageApi.success("Registrasi Berhasil");
    } catch (error) {
      console.error("Error registering user:", error);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: Yup.object().shape({
      userName: Yup.string().required("nama wajib di isi").min(3).max(20),
      email: Yup.string().required("email wajib di isi").email("email tidak valid"),
      password: Yup.string()
        .required("kata sandi wajib di isi")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Kata sandi harus ada huruf besar, huruf kecil, angka, dan karakter spesial"),
    }),
  });

  return (
    <Form name="signUp" layout="vertical" initialValues={{ remember: true }} autoComplete="off" onFinish={formik.handleSubmit} className="!w-full">
      {contextHolder}
      <Form.Item label="userName" name="userName" validateStatus={formik.errors.userName ? "error" : ""} help={formik.errors.userName}>
        <Input placeholder="full name" {...formik.getFieldProps("userName")} />
      </Form.Item>

      <Form.Item label="Email" name="email" validateStatus={formik.errors.email ? "error" : ""} help={formik.errors.email}>
        <Input placeholder="Email" {...formik.getFieldProps("email")} />
      </Form.Item>

      <Form.Item label="Password" name="password" validateStatus={formik.errors.password ? "error" : ""} help={formik.errors.password}>
        <Input.Password placeholder="Password" {...formik.getFieldProps("password")} />
      </Form.Item>

      <Form.Item className="mt-20">
        <Button className="!w-full !font-semibold" htmlType="submit" loading={loading}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
