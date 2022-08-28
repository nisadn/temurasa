import Head from "next/head";
import styles from '../../styles/Home.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../../config/services/authApi";
import { logout } from "../../redux/features/authSlice";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

const BackgroundLayout = ({ title, desc, children }) => {const isLogin = useSelector((state) => state.auth.isLogin);
    const account = useSelector((state) => state.auth.account);
    const dispatch = useDispatch();
    const toast = useToast();
    const router = useRouter();
  
    useEffect(() => {
      if (isLogin && Date.parse(account.tokens.access.expires) < Date.now()) {
          if (Date.parse(account.tokens.refresh.expires) < Date.now()) {
            const hitRefreshApi = async () => {
              await authApi.refresh({
                refreshToken: `${account.tokens.refresh.token}`
              }).then((res) => {
                dispatch(refresh(res));
            })
            }
  
            hitRefreshApi();
          } else {
            dispatch(logout());
            toast({
              title: "Your session is over. Automatically logged out.",
              status: 'success',
              variant: 'left-accent',
              position: 'top',
              duration: 3000,
              isClosable: true,
            });
          }
          router.push('/login');
      } 
    }, []);

    return (
        <div className={styles.home}>
            <Head>
                <title>{title ? title : "TemuRasa"}</title>
                <meta
                    name="description"
                    content={desc ? desc : "TemuRasa: Find Your Taste in Indonesia"}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            { children }
        </div>
    )
}

export default BackgroundLayout;