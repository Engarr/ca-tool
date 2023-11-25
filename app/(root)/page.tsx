import { Paper, Title, Text, Anchor } from "@mantine/core";
import styles from "./root.module.css";
import { AuthForm } from "./_components/auth-form";
import Image from "next/image";

export default function RootPage() {
  return (
    <div className={styles.wrapper}>
      <Image
        src={"/image/test-bg-2.svg"}
        alt="background"
        fill
        objectFit="cover"
      />
      <Paper className={styles.form} radius={0} p={30}>
        <Title order={2} className={styles.title} ta="center" mt="md" mb={50}>
          Welcome back to Mantine!
        </Title>

        <AuthForm />
      </Paper>
    </div>
  );
}
